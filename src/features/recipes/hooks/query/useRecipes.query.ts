import { useQuery } from '@tanstack/react-query';
import { searchRecipes } from '../../api/recipe.api';
import Meta from '../../types/entities/meta.entity';
import { PaginatedRecipes } from '../../types/shemas/paginatedRecipes.schema';

export const useRecipes = (
  search: string = '',
  page: number = 0,
  numberElement: number = 15,
) => {
  const { data: paginatedRecipes, ...rest } = useQuery<PaginatedRecipes>({
    queryKey: ['paginatedRecipes', search, page],
    queryFn: () => searchRecipes(search, page, numberElement),
  });

  const meta = {
    offset: paginatedRecipes?.offset || 0,
    number: paginatedRecipes?.number || 0,
    totalResults: paginatedRecipes?.totalResults || 0,
  } as Meta;

  return { recipesSummary: paginatedRecipes?.results || [], meta, ...rest };
};
