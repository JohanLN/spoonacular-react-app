import { z } from 'zod';
import { summaryRecipeSchema } from './summaryRecipe.schema';

export const paginatedRecipesSchema = z.object({
  offset: z.number(),
  number: z.number(),
  totalResults: z.number(),
  results: z.array(summaryRecipeSchema),
});

export type PaginatedRecipes = z.infer<typeof paginatedRecipesSchema>;
