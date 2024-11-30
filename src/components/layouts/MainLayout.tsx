import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = () => {
  return (
    <div className="relative">
      <Header />
      <main className="h-full w-screen bg-secondary px-4 py-2 md:p-5 md:px-96">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
