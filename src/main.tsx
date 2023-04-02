import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import About from './page/about/About';
import NotFound from './page/notFound/NotFound';

import Home from './page/home/Home';
import FormsPage from './page/form/FormsPage';
import './index.css';

const router = createBrowserRouter([
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
          {
            path: '/form',
            element: <FormsPage />,
          },
        ],
      },
    ],
  },
  { path: '*', element: <NotFound></NotFound> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
