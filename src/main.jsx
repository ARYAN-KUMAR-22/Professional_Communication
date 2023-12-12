import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './component/Home.jsx';
import Professsional_Communication_Skill from './component/Professional_Communication_Skills.jsx';
import About_Us from './component/About_Us.jsx';
import Keywords from './component/Keywords.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/professional_communication",
    element: <Professsional_Communication_Skill />,
  },
  {
    path: "/about_us",
    element: <About_Us />,
  },
  {
    path: "/keywords",
    element: <Keywords />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

