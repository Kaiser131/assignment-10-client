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
import Frances from './Components/Home/Countries/France/Frances';
import Italys from './Components/Home/Countries/Italy/Italys';
import Spains from './Components/Home/Countries/Spain/Spains';
import Englands from './Components/Home/Countries/England/Englands';
import NetherLands from './Components/Home/Countries/NetherLand/NetherLands';
import SwitzerLands from './Components/Home/Countries/SwitzerLand/SwitzerLands';
import AddTravels from './Components/AddTravels/AddTravels/AddTravels';
import TouristAdmin from './Components/TouristAdmin/TouristAdmin/TouristAdmin';
import UpdateTravels from './Components/AddTravels/UpdateTravels/UpdateTravels';


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
      },
      {
        path: '/france',
        element: <Frances></Frances>
      },
      {
        path: '/italy',
        element: <Italys></Italys>
      },
      {
        path: '/spain',
        element: <Spains></Spains>
      },
      {
        path: '/england',
        element: <Englands></Englands>
      },
      {
        path: '/netherlands',
        element: <NetherLands></NetherLands>
      },
      {
        path: '/switzerlands',
        element: <SwitzerLands></SwitzerLands>
      },
      {
        path: '/addTravels',
        element: <AddTravels></AddTravels>
      },
      {
        path: '/updateTravels/:id',
        element: <UpdateTravels></UpdateTravels>,
        loader: ({ params }) => fetch(`http://localhost:5000/spots/${params.id}`)
      },
      {
        path: '/tourismAdmin',
        element: <TouristAdmin></TouristAdmin>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
