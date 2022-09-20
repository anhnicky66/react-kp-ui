import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';
import { Topic } from '@/features/topics/routes/Topic';
import { Analysis } from '@/features/analysis';

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
      { path: '/:tenant/topics', element: <Topics /> },
      { path: '/:tenant/topics/:topic', element: <Topic /> },
      { path: '/:tenant/analysis/', element: <Analysis /> },
      { path: '/', element: <div>Home</div> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
