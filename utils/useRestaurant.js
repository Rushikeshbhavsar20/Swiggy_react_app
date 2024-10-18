import { useState } from "react";
import { useEffect } from "react";



const fetchresdata = ()=>{


    const[resdetail,setresdetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
  useEffect(()=>{
        fetchdata();
  },[])


    const fetchdata = async() =>{
       try{
        
       const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId=328616&catalog_qa=undefined&submitAction=ENTER")
       const  json = await data.json();
       setresdetail(json);    
       console.log(json);
       
       }catch(err){
        setError("Failed to fetch data")
        console.log(err);
       }finally{
          setLoading(false);
       }
   
      
    }

 

}

export default fetchresdata;