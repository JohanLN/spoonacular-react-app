import { z } from 'zod';

export const summaryRecipeSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string().url(),
  imageType: z.string(),
});

export type SummaryRecipe = z.infer<typeof summaryRecipeSchema>