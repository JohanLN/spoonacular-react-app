import axiosClient from '@/api/axiosClient';
import { MOCK } from '@/lib/environment.constant';
import recipeMock from '../types/mocks/recipe.mock';
import recipesMock from '../types/mocks/recipes.mock';
import {
  PaginatedRecipes,
  paginatedRecipesSchema,
} from '../types/shemas/paginatedRecipes.schema';
import { Recipe, recipeSchema } from '../types/shemas/recipe.schema';

export const searchRecipes = async (
  query: string,
  offset: number,
  number: number,
): Promise<PaginatedRecipes> => {
  if (MOCK) {
    return recipesMock;
  }

  const response = await axiosClient.get('recipes/complexSearch', {
    params: { query, offset, number },
  });

  const { success } = paginatedRecipesSchema.safeParse(response.data);

  if (!success) {
    throw new Error(
      `Ooooops we are unable to get the list of recipes... Please try again`,
    );
  }

  return response.data;
};

export const recipeInformations = async (id: number): Promise<Recipe> => {
  if (MOCK) {
    const { success } = recipeSchema.safeParse(recipeMock);

    if (!success) {
      throw new Error(
        `Oooops we are unable to get your recipe informations... Please try again`,
      );
    }
    return recipeMock;
  }

  const response = await axiosClient.get(`recipes/${id}/information`);

  const parsedResponse = recipeSchema.parse(response.data);
  return parsedResponse;
};
