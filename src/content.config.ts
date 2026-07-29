import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const publications = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
	schema: z.object({
		title: z.string(),
		authors: z.array(z.string()).default(["Zachary Sedefian"]),
		type: z.enum([
			"peer-reviewed-article",
			"working-paper",
			"conference-paper",
			"book-review",
		]),
		journal: z.string().optional(),
		venue: z.string().optional(),
		year: z.number(),
		status: z.enum([
			"published",
			"forthcoming",
			"in-preparation",
			"under-review",
		]),
		abstract: z.string(),
		doi: z.string().optional(),
		pdf: z.string().optional(),
		video: z.string().url().optional(),
		citation: z.string(),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
	}),
});

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
		role: z.string().default("Instructor"),
		description: z.string(),
		syllabus: z.string().optional(),
		readings: z.array(z.string()).default([]),
	}),
});

const news = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		summary: z.string(),
		link: z.string().url().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { publications, writing, courses, news };
