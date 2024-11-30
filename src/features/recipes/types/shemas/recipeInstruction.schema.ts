import { array, string, z } from 'zod';
import { recipeStepSchema } from './recipeStep.schema';

export const recipeInstructionSchema = z.object({
  name: string(),
  steps: array(recipeStepSchema),
});

export type RecipeInstruction = z.infer<typeof recipeInstructionSchema>;
