import PageFallback from '@/components/fallback/PageFallback';
import MainLayout from '@/components/layouts/MainLayout';
import Recipe from '@/features/recipes/pages/Recipe';
import NotFound from '@/pages/ErrorPage/NotFound';
import Home from '@/pages/Home';
import { ErrorBoundary } from 'react-error-boundary';
import { useRoutes } from 'react-router-dom';

const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <ErrorBoundary FallbackComponent={PageFallback}>
              <Home />
            </ErrorBoundary>
          ),
        },
        {
          path: 'recipes/:id',
          element: (
            <ErrorBoundary FallbackComponent={PageFallback}>
              <Recipe />
            </ErrorBoundary>
          ),
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
