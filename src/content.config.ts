import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
	schema: z.object({
		title: z.string(),
		category: z.enum([
			"academic",
			"journalism",
			"essay",
			"book-review",
			"interview",
		]),
		publication: z.string().optional(),
		date: z.coerce.date(),
		status: z.enum(["published", "forthcoming"]).default("published"),
		excerpt: z.string(),
		link: z.string().url().optional(),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
	}),
});

const courses = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
	schema: z.object({
		courseNumber: z.string(),
		title: z.string(),
		institution: z.string(),
		semester: z.string(),
		syllabus: z.string().optional(),
	}),
});

// Each news item is a single sentence in the Markdown body (links allowed).
const news = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
	schema: z.object({
		date: z.coerce.date(),
	}),
});

export const collections = { writing, courses, news };
