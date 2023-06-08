import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
  </React.StrictMode>,
)
