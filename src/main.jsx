import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Error from './components/Error.jsx';
import Phone from './components/Phone.jsx';
import Phones from './components/Phones.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
    
      {
        path: 'phones',
        element: <Phones></Phones>,
        loader: () => fetch(`http://localhost:4000/phones/`)
        
      },
      {
        path: "/phones/:id",
        element: <Phone></Phone>,
        loader: ({params}) => fetch(`http://localhost:4000/phones/${params.id}`)
       
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
