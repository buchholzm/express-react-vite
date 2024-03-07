import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';

import Root from './routes/root.jsx';
import HomeRoute, { loader as homeLoader } from './routes/home.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <HomeRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
