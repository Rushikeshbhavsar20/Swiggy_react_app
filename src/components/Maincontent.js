import { Rescard } from "./Rescard";
import {useState,useEffect} from "react"


const Maincontent = () =>{
    
    const[resList,setresList] = useState([]);
    const ListoffilterRes =  resList.filter((res)=>res.info.avgRating > 4.3);
    const Filter = ()=>{
        setresList(ListoffilterRes);
    };
     
    useEffect(() => {
     fetchdata();
      
      
    }, [])
    
    const fetchdata = async()=>{
        const clouddata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await clouddata.json();
        const data = json.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        if (data) {
            setresList(data);
        } else {
            console.error("Data not found", json);
            // Handle the case when data is undefined
        }
        

    }
    //conditonal rendering
    if(resList.length == 0){
        return <p className="shimmer">Loading.................</p>
    } 
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