import PageFallback from '@/components/fallback/PageFallback';
import AuthenticationLayout from '@/components/layouts/AuthenticationLayout';
import MainLayout from '@/components/layouts/MainLayout';
import { Login } from '@/features/authentication/pages/Login';
import { Signup } from '@/features/authentication/pages/Signup';
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
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
    {
      path: 'authentication',
      element: <AuthenticationLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: 'signup',
          element: <Signup />,
        },
        {
          path: '*',
          element: <NotFound />,
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
