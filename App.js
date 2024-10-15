import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./src/components/Header";
import Maincontent from "./src/components/Maincontent";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";

const Applayout =  () =>{
    return ( <div className="app">
              <Header />
              <Maincontent/>   
        </div>
  
    );
}

const router =  createBrowserRouter([
    {
        path:"/",
        element:<Applayout />,
        errorElement:<Error />,
    },{
        path:"/about",
        element:<About />,
    },{
        path:"/contact",
        element:<Contact />,
    }
]);







const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(<RouterProvider router={router} />)