import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root/Root';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import RecentDetails from './Components/Home/Recent/RecentDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/article/:id',
        element: <RecentDetails></RecentDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/article/${params.id}`)
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
