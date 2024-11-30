import { boolean, number, string, z } from "zod";
import { recipeInstructionSchema } from "./recipeInstruction.schema";

export const recipeSchema = z.object({
  id: number(),
  title: string(),
  image: string(),
  imageType: string(),
  readyInMinutes: number(),
  servings: number(),
  summary: string(),
  vegetarian: boolean(),
  vegan: boolean(),
  glutenFree: boolean(),
  dairyFree: boolean(),
  veryHealthy: boolean(),
  cheap: boolean(),
  veryPopular: boolean(),
  spoonacularScore: number(),
  spoonacularSourceUrl: string(),
  analyzedInstructions: z.array(recipeInstructionSchema)
})

export type Recipe = z.infer<typeof recipeSchema>