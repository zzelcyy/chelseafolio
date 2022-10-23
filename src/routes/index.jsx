import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
