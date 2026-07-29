import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './home.jsx';
import Login from './login.jsx';
import NotFound from './notfound.jsx';
import Counter from './counter.jsx';
import Details from './details.jsx'; // <-- New page

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/details',
    element: <Details />, // <-- New route
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);