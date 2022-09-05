import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { Topics } = lazyImport(() => import('@/features/topics'), 'Topics');

const App = () => {
  return (
    <div>
      <Suspense
        fallback={
            <div>Loading...</div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export const publicRoutes = [
  {
    path: '',
    element: <App />,
    children: [
      { path: 'topics', element: <Topics /> },
      { path: '', element: <div>Home</div> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
