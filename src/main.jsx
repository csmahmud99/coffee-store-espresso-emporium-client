import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:5000/coffee")
  },
  {
    path: "/add-coffee",
    element: <AddCoffee />
  },
  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee />,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
