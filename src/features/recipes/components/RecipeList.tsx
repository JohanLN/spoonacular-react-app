import PaginationWithLink from '@/components/layouts/PaginationWithLink';
import Meta from '../types/entities/meta.entity';
import { SummaryRecipe } from '../types/shemas/summaryRecipe.schema';
import RecipeItem from './RecipeItem';

interface RecipeListProps {
  recipes: SummaryRecipe[];
  meta: Meta;
}

const RecipeList = ({ recipes, meta }: RecipeListProps) => {
  return (
    <div className="flex flex-col gap-3">
      <ul className="grid justify-center gap-3 md:grid-cols-4">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeItem recipe={recipe} />
          </li>
        ))}
      </ul>
      <PaginationWithLink meta={meta} />
    </div>
  );
};

export default RecipeList;
