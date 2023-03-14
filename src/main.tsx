import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { routes } from '@/router/index';
import About from '@/page/about/About';
import NotFound from '@/page/notFound/NotFound';
import Home from '@/page/home/Home';
import '@/index.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
