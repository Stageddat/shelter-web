export default function EntriesHeader({
  entriesCount,
}: {
  entriesCount: number;
}) {
  return (
    <div className="mb-6">
      <h1 className="mb-2 text-left text-7xl font-bold tracking-wide lowercase">
        entries
      </h1>
      <p className="text-muted-foreground mt-1 text-lg">
        {entriesCount} {entriesCount === 1 ? "entry" : "entries"}
      </p>
    </div>
  );
}
