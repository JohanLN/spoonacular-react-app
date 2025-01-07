import { Outlet } from 'react-router-dom';

const AuthenticationLayout = () => {
  return (
    <div>
      <main className="h-full w-screen px-4 py-2 md:p-5 md:px-96">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthenticationLayout;
