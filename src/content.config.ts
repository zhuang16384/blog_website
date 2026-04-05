import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: ["**/*.md", "!**/README.md"],
  }),
  schema: z.object({
    // Provide a default 'Untitled' if title is missing
    title: z.string().default("Untitled"),
    description: z.string().optional(),
    // Transform string to Date object, defaulting to now if missing
    date: z.coerce.date().default(() => new Date()),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
