import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Registration from './pages/Registration.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

import MainRoot from './components/MainRoot.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "registration", Component: Registration },
        
    ],
     
  },
 
]);
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
