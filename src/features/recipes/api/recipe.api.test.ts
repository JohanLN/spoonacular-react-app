import axiosClient from '@/api/axiosClient';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import recipeMock from '../types/mocks/recipe.mock';
import recipesMock from '../types/mocks/recipes.mock';
import { PaginatedRecipes } from '../types/shemas/paginatedRecipes.schema';
import { Recipe } from '../types/shemas/recipe.schema';
import { recipeInformations, searchRecipes } from './recipe.api';

vi.mock('@/api/axiosClient');
vi.mock('@/lib/environment.constant', () => ({
  MOCK: false,
  BASE_URL: 'test',
}));

describe('recipe.api', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('searchRecipes', () => {
    it('should return paginated recipes when API call is successful', async () => {
      const mockResponse = { data: recipesMock };
      vi.mocked(axiosClient.get).mockResolvedValueOnce(mockResponse);

      const result: PaginatedRecipes = await searchRecipes('pasta', 0, 10);

      expect(axiosClient.get).toHaveBeenCalledWith('recipes/complexSearch', {
        params: { query: 'pasta', offset: 0, number: 10 },
      });

      expect(result).toEqual(recipesMock);
    });
  });

  describe('recipeInformations', () => {
    it('should return recipe informations when API call is successful', async () => {
      const mockResponse = { data: recipeMock };
      vi.mocked(axiosClient.get).mockResolvedValueOnce(mockResponse);

      const result: Recipe = await recipeInformations(123);

      expect(axiosClient.get).toHaveBeenCalledWith('recipes/123/information');

      expect(result.title).toEqual(recipeMock.title);
    });
  });

  describe('error handling', () => {
    it('should handle API client error in searchRecipes', async () => {
      const mockError = {
        message: 'Network error',
        details: 'Connection failed',
      };
      vi.mocked(axiosClient.get).mockRejectedValueOnce(mockError);

      await expect(searchRecipes('pasta', 0, 10)).rejects.toEqual(mockError);
    });

    it('should throw error when searchRecipes response fails schema validation', async () => {
      const invalidResponse = { data: { invalid: 'data' } };
      vi.mocked(axiosClient.get).mockResolvedValueOnce(invalidResponse);

      await expect(searchRecipes('pasta', 0, 10)).rejects.toThrow(
        'Ooooops we are unable to get the list of recipes... Please try again',
      );
    });

    it('should handle API client error in recipeInformations', async () => {
      const mockError = {
        message: 'Server error',
        statusCode: 500,
        details: 'Internal server error',
      };
      vi.mocked(axiosClient.get).mockRejectedValueOnce(mockError);

      await expect(recipeInformations(123)).rejects.toEqual(mockError);
    });

    it('should throw error when searchRecipes response fails schema validation', async () => {
      const invalidResponse = { data: { invalid: 'data' } };
      vi.mocked(axiosClient.get).mockResolvedValueOnce(invalidResponse);

      await expect(recipeInformations(123)).rejects.toThrow(
        `Oooops we are unable to get your recipe informations... Please try again`,
      );
    });
  });
});
