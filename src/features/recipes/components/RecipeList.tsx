import PaginationWithLink from '@/components/layouts/PaginationWithLink';
import Meta from '../types/entities/meta.entity';
import { SummaryRecipe } from '../types/shemas/summaryRecipe.schema';
import RecipeItem from './RecipeItem';

interface RecipeListProps {
  recipesSummary: SummaryRecipe[];
  meta: Meta;
}

const RecipeList = ({ recipesSummary, meta }: RecipeListProps) => {
  return (
    <div className="flex flex-col gap-3">
      <ul className="grid justify-center gap-3 md:grid-cols-4">
        {recipesSummary.map((recipeSummary) => (
          <li key={recipeSummary.id}>
            <RecipeItem recipe={recipeSummary} />
          </li>
        ))}
      </ul>
      <PaginationWithLink meta={meta} />
    </div>
  );
};

export default RecipeList;
