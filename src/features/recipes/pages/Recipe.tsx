import { useRecipe } from '../hooks/query/useRecipe.query';

const Recipe = () => {
  const { recipe, error, isLoading } = useRecipe(644387);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    throw new Error(error.message);
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
    </div>
  );
};

export default Recipe;
