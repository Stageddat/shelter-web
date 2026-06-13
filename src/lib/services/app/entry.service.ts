import { db } from '$lib/db';
import { encryptText, decryptText } from '$lib/crypto';
import { getUser } from '$lib/services/app/db.service';

// mover esto a tipos
export interface DecryptedEntry {
	id: string;
	date: string;
	time: string;
	title: string; // descifrado
	content?: string; // descifrado, solo cuando se abre la entrada
	createdAt: string;
	updatedAt: string;
	wordCount?: number;
	charCount?: number;
}

export interface GroupedEntries {
	date: string;
	displayDate: string;
	entries: DecryptedEntry[];
}

export interface CreateEntryParams {
	masterKey: CryptoKey;
	title: string;
	content: string;
	wordCount?: number;
	charCount?: number;
	date?: Date;
}

// encriptar titulo y contenido antes de guardar
export async function createEntry({
	masterKey,
	title,
	content,
	wordCount,
	charCount,
	date
}: CreateEntryParams): Promise<string> {
	const user = await getUser();
	if (!user) throw new Error('no user found');

	const { ciphertext: encryptedTitle, iv: titleIv } = await encryptText(
		masterKey,
		title || 'untitled'
	);
	const { ciphertext: encryptedContent, iv: contentIv } = await encryptText(masterKey, content);

	const now = date ?? new Date();
	const id = crypto.randomUUID();

	await db.entries.add({
		id,
		userId: user.id,
		encryptedTitle,
		titleIv,
		encryptedContent,
		contentIv,
		date: now.toLocaleDateString('sv'), // YYYY-MM-DD
		time: now.toLocaleTimeString('sv').slice(0, 5), // HH:mm
		createdAt: now.toISOString(),
		updatedAt: now.toISOString(),
		wordCount: wordCount ?? 0,
		charCount: charCount ?? 0
	});

	return id;
}

// encriptar titulo y contenido antes de actualizar
export async function updateEntry(
	entryId: string,
	masterKey: CryptoKey,
	title: string,
	content: string,
	wordCount: number,
	charCount: number
): Promise<void> {
	console.log('saving wordCount:', wordCount, 'charCount:', charCount);
	const { ciphertext: encryptedTitle, iv: titleIv } = await encryptText(
		masterKey,
		title || 'untitled'
	);
	const { ciphertext: encryptedContent, iv: contentIv } = await encryptText(masterKey, content);

	await db.entries.update(entryId, {
		encryptedTitle,
		titleIv,
		encryptedContent,
		contentIv,
		updatedAt: new Date().toISOString(),
		wordCount,
		charCount
	});
}

// borrar entrada
export async function deleteEntry(entryId: string): Promise<void> {
	await db.entries.where('id').equals(entryId).delete();
}

// solo título, para la lista de /entries
export async function getEntries(masterKey: CryptoKey): Promise<DecryptedEntry[]> {
	const user = await getUser();
	if (!user) return [];

	const entries = await db.entries.where('userId').equals(user.id).reverse().sortBy('createdAt');

	return Promise.all(
		entries.map(async (entry) => ({
			id: entry.id,
			date: entry.date,
			time: entry.time,
			createdAt: entry.createdAt,
			updatedAt: entry.updatedAt,
			wordCount: entry.wordCount,
			charCount: entry.charCount,
			title: await decryptText(
				masterKey,
				entry.encryptedTitle as Uint8Array<ArrayBuffer>,
				entry.titleIv as Uint8Array<ArrayBuffer>
			)
			// sin content porque no lo necesitamos
			// ya que es una lista de /entries
		}))
	);
}

// título + contenido, para abrir una entrada
export async function getEntry(entryId: string, masterKey: CryptoKey): Promise<DecryptedEntry> {
	const entry = await db.entries.get({ id: entryId });

	if (!entry) throw new Error('entry not found');

	const [title, content] = await Promise.all([
		decryptText(
			masterKey,
			entry.encryptedTitle as Uint8Array<ArrayBuffer>,
			entry.titleIv as Uint8Array<ArrayBuffer>
		),
		decryptText(
			masterKey,
			entry.encryptedContent as Uint8Array<ArrayBuffer>,
			entry.contentIv as Uint8Array<ArrayBuffer>
		)
	]);

	return {
		id: entry.id,
		date: entry.date,
		time: entry.time,
		createdAt: entry.createdAt,
		updatedAt: entry.updatedAt,
		title,
		content
	};
}

// agrupar
// TODO: separar en otro archivo luego
export function groupEntriesByDate(entries: DecryptedEntry[]): GroupedEntries[] {
	const grouped = entries.reduce(
		(acc, entry) => {
			if (!acc[entry.date]) acc[entry.date] = [];
			acc[entry.date].push(entry);
			return acc;
		},
		{} as Record<string, DecryptedEntry[]>
	);

	return Object.entries(grouped)
		.sort(([a], [b]) => b.localeCompare(a))
		.map(([date, entries]) => ({
			date,
			displayDate: formatDisplayDate(date),
			entries
		}));
}

function formatDisplayDate(dateString: string): string {
	const date = new Date(dateString + 'T00:00:00');
	const today = new Date();
	const yesterday = new Date(today);
	yesterday.setDate(yesterday.getDate() - 1);

	const fmt = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

	if (fmt(date) === fmt(today)) return 'today';
	if (fmt(date) === fmt(yesterday)) return 'yesterday';

	return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export async function getTotalEntriesCount(): Promise<number> {
	const user = await getUser();
	if (!user) return 0;

	return await db.entries.where('userId').equals(user.id).count();
}

export async function getLastEntryDate(): Promise<string | null> {
	const user = await getUser();
	if (!user) return null;

	const lastEntry = await db.entries.where('userId').equals(user.id).reverse().sortBy('createdAt');

	return lastEntry.length > 0 ? lastEntry[0].date : null;
}
