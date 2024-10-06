import { Rescard } from "./Rescard";
import {useState} from "react"
import ResObj from "../../utils/constants";
const Maincontent = () =>{
    
    const[resList,setresList] = useState(ResObj);
    const ListoffilterRes =  ResObj.filter((res)=>res.info.avgRating > 4.3);
    const Filter = ()=>{
        setresList(ListoffilterRes);
    };

    return(
       <div className="mainc">
           <div className="search">
            <button className="filter-btn"  onClick={Filter} >Filter the Restaurant</button>
           </div>
           <div className="rescardmanager"> 
           <div className="res-container"> 
             {  // we cannot define any variable in jsx 
               
            resList.map(Reasturant => (
                     <Rescard resData={Reasturant}/>
                ))
                  
               

            }
                  
            


             
           </div>
           </div>
       </div>

    );
}
export default Maincontent;