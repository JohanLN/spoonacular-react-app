import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import { SummaryRecipe } from '../types/shemas/summaryRecipe.schema';

interface RecipeItemProps {
  recipe: SummaryRecipe;
}

const RecipeItem = ({ recipe }: RecipeItemProps) => {
  return (
    <Card className="w-full max-w-sm">
      <div>
        <img
          src={recipe.image}
          alt={recipe.title}
          width={400}
          height={500}
          className="rounded-t-lg object-cover"
        />
      </div>
      <CardHeader className="h-24 overflow-hidden">
        <CardTitle className="line-clamp-3">{recipe.title}</CardTitle>
      </CardHeader>
      <CardContent className="md:flex md:justify-end">
        <NavLink to={`/recipes/${recipe.title}-${recipe.id}`}>
          <Button variant="outline" className="w-full md:w-auto">
            View recipe
          </Button>
        </NavLink>
      </CardContent>
    </Card>
  );
};

export default RecipeItem;
