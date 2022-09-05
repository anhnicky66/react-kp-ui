import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <div></div> }];

  const element = useRoutes([...publicRoutes, ...commonRoutes]);

  return <>{element}</>;
};
