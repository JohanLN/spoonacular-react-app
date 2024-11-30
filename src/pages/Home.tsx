import FallbackComponent from '@/components/fallback/FallbackComponent';
import Recipes from '@/features/recipes/pages/Recipes';
import { ErrorBoundary } from 'react-error-boundary';

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Recipes />
    </ErrorBoundary>
  );
};

export default Home;
