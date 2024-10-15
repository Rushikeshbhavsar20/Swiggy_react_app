import React from 'react'
import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    
  return (
    <div>
        <h1>Opps Something went wrong</h1>
         <h2>{err.status}</h2>
         <h3>{err.statusText}</h3>
         <h4>{err.data}</h4>
    </div>
  )
}

export default Error