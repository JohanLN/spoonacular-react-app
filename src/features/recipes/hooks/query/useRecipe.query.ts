import { useQuery } from "@tanstack/react-query"
import { recipeInformations } from "../../api/recipe.api"
import { Recipe } from "../../types/shemas/recipe.schema";

export const useRecipe = (id: number) => {
  const { data: recipe, ...rest } = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => recipeInformations(id),
  });

  return { recipe: recipe as Recipe, ...rest}
}