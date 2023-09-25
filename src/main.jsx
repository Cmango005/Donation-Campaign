import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/components/Roots/Root';
import Home from './assets/components/Home/Home';
import Donation from './assets/components/Donation/Donation';
import Static from './assets/components/Static/Static';
import Details from './assets/components/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
     {
      path:"/",
      loader:()=> fetch('/donation.json'),
      element:<Home></Home>
     },
     {
      path:"/donation",
      element:<Donation></Donation>
     },
     {
      path:"/static",
      element:<Static></Static>

     },
     {
      path:'/card/:id',
      loader: () =>  fetch('../donation.json'),
      element:<Details></Details>
     }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)

