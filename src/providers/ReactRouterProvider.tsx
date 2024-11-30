import AppRoutes from '@/routes/AppRoutes';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface ReactRouterProvider {
  children?: ReactNode;
}

const ReactRouterProvider = ({ children }: ReactRouterProvider) => {
  return (
    <BrowserRouter>
      {children}
      <AppRoutes />
    </BrowserRouter>
  );
};

export default ReactRouterProvider;
