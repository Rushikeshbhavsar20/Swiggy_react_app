import React from "react"
import ReactDOM from "react-dom/client"

import Header from "./src/components/Header";
import Maincontent from "./src/components/Maincontent";


const Applayout =  () =>{
    return ( <div className="app">
              <Header />
              <Maincontent/>   
        </div>
  
    );
}

const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(<Applayout />)