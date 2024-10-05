import { Rescard } from "./Rescard";

import ResObj from "../../utils/constants";
const Maincontent = () =>{

    return(
       <div className="mainc">
           <div className="search">
            <input type="text"></input>
            <p>Search</p>
           </div>
           <div className="rescardmanager"> 
           <div className="res-container"> 
             {  // we cannot define any variable in jsx 
               
            ResObj.map(Reasturant => (
                     <Rescard resData={Reasturant}/>
                ))
                  
               

            }
                  
            


             
           </div>
           </div>
       </div>

    );
}
export default Maincontent;