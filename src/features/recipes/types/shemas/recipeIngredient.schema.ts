import { number, string, z } from 'zod';

export const recipeIngredientSchema = z.object({
  id: number(),
  name: string(),
  localizedName: string(),
  image: string(),
});

export type RecipeIngredient = z.infer<typeof recipeIngredientSchema>;
