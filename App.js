import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Header from "./src/components/Header";
import Maincontent from "./src/components/Maincontent";
import Error from "./src/components/Error";
import { Outlet } from "react-router-dom"; //This will push the element from children array object define in router according to the path i.e for /about it will push about component inplace of outlet
import Offers from "./src/components/Offers";
import About from "./src/components/About";



const Applayout =  () =>{
    return ( <div className="app">
              <Header className="Header-component"/>
              <Outlet />   
        </div>
  
    );
}
///** This  will replace the component according to the path  for /about it will change outlet  component by about component*/
const router =  createBrowserRouter([
    {
        path:"/",
        element:<Applayout />,
        errorElement:<Error />, //created a children route here , helps to keep header intact on every-page we navigate
        children:[{
            path:"/",
            element:<Maincontent />,
        },
        {
            path:"/offers",
            element:<Offers />,
        },{
            path:"/about",
            element:<About/>,
        }],
    },
]);







const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(<RouterProvider router={router} />)