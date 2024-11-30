import { number, string, z } from 'zod';

export const recipeEquipmentSchema = z.object({
  id: number(),
  name: string(),
  localizedName: string(),
  image: string().url(),
});

export type RecipeEquipment = z.infer<typeof recipeEquipmentSchema>;
