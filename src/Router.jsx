import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Product from './pages/Product';
import Search from './pages/Search';
import Pimages from './pages/Pimages';
import MainOutlet from '../MainOutlet';

let route=createBrowserRouter([
    {
        path:"/",
        element:<MainOutlet/>,
        children:[
            {index:true, element:<App/>}, 
             
             {    path:"product",     element:<Product/>  },
             {      path:"s",      element:<Search/>  },
             {      path:"p",       element:<Pimages/>   }
        ]
         
        
    },
   

])
export default route