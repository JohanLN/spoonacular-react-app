import { array, number, string, z } from 'zod';
import { recipeEquipmentSchema } from './recipeEquipment.schema';
import { recipeIngredientSchema } from './recipeIngredient.schema';

export const recipeStepSchema = z.object({
  number: number(),
  step: string(),
  ingredients: array(recipeIngredientSchema),
  equipment: array(recipeEquipmentSchema),
});

export type RecipeStep = z.infer<typeof recipeStepSchema>;
