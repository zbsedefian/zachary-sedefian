import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../data/site";

export async function GET(context) {
	const news = await getCollection("news");
	news.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

	return rss({
		title: `${SITE.title} — News`,
		description: "Updates on publications, awards, and service.",
		site: context.site,
		items: news.map((entry) => ({
			title: entry.data.title,
			pubDate: entry.data.date,
			description: entry.data.summary,
			link: `/news/${entry.id}/`,
		})),
	});
}
