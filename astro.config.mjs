// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { CV_PDF_HREF, SCHOLAR_URL } from './src/data/site';

// https://astro.build/config
export default defineConfig({
	site: 'https://zacharysedefian.com',
	integrations: [sitemap()],
	// Keep old links (e.g. in applications) working after the pages were removed.
	redirects: {
		'/cv': CV_PDF_HREF,
		'/news': '/',
		'/research': SCHOLAR_URL,
	},
});
