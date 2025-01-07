import useSearch from '@/hooks/useSearch.hook';
import RecipeList from '../components/RecipeList';
import { useRecipes } from '../hooks/query/useRecipes.query';

const Recipes = () => {
  const { query, offset } = useSearch();
  const { recipesSummary, meta, error, isLoading } = useRecipes(query, offset);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    throw new Error(error.message);
  }

  return <RecipeList recipesSummary={recipesSummary} meta={meta} />;
};

export default Recipes;
