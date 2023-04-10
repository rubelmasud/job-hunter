import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Componenets/Layout';
import Home from './Componenets/Home';
import AppliedJobs from './Componenets/AppliedJobs';
import Statistics from './Componenets/Statistics';
import Blog from './Componenets/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'jobApplied',
        element: <AppliedJobs />
      },
      {
        path: 'blog',
        element: <Blog />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
