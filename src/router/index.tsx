import App from '@/App';
import About from '@/page/about/About';
import Home from '@/page/home/Home';
import NotFound from '@/page/notFound/NotFound';
import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Outlet></Outlet>,
        children: [
          {
            path: '/',
            element: <Home></Home>,
          },
          {
            path: '/about',
            element: <About></About>,
          },
          { path: '*', element: <NotFound></NotFound> },
        ],
      },
    ],
  },
];
