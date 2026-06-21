import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import { localizeHref } from '$lib/paraglide/runtime';
import { locales } from '$lib/paraglide/runtime';

export const prerender = true;

export const GET: RequestHandler = async () => {
	return await sitemap.response({
		origin: 'https://shelter.cat',
		excludeRoutePatterns: ['/app', '/login', '/signup', '/restore', 'test', '.*sitemap.*'],
		processPaths: (paths) => {
			return paths.map(({ path, ...rest }) => ({
				...rest,
				path: localizeHref(path, { locale: 'en' }),
				alternates: locales.map((lang) => ({
					lang,
					path: localizeHref(path, { locale: lang })
				}))
			}));
		}
	});
};
