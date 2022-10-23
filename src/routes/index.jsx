import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

const Routes = ({ children }) => (
  <RouterProvider router={router}>{children}</RouterProvider>
);

export default Routes;
