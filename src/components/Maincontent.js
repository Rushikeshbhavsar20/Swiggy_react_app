import { Rescard } from "./Rescard";
import {useState,useEffect} from "react"


const Maincontent = () =>{
    const[text,settext] = useState("");
    const[filterlist,setfilterList] = useState([]);
    const[resList,setresList] = useState([]);
    const ListoffilterRes =  filterlist.filter((res)=>res.info.avgRating > 4.3);
    useEffect(() => {
        fetchdata();
}, [])

    const Filter = ()=>{
       setfilterList(ListoffilterRes);
       
    };
    
    const searchRestaurant = ()=>{
    const listt = resList.filter((res)=>{ return res.info.name.toLowerCase().includes(text)});
    setfilterList(listt); 
    }
    

    const fetchdata = async()=>{
     
           try{    
            const clouddata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true");
            const json = await clouddata.json();
            const data = await  json.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(json);
             
            if (data) {
                setresList(data);
                setfilterList(data);
            } else {
                console.error("Data not found", json);
              
            }
           }catch(err){
            console.log("error");
           }
    }
 
    if(resList.length == 0){
        return <p className="shimmer">Loading.................</p>
    } 
    return(
       <div className="mainc">
                 <div className="search">
                  <input type="text" value={text} onChange={(e)=>{ 
                         settext(e.target.value.toLowerCase());
                  }} />
                  <button className="search-btn" onClick={searchRestaurant}>search</button>
              </div>
           <div className="filter">
            <button className="filter-btn"  onClick={Filter} >Filter the Restaurant</button>
           </div>
           <div className="rescardmanager"> 
           <div className="res-container"> 
             {  
               
            filterlist.map(Reasturant => (
                     <Rescard resData={Reasturant}/>
                ))
            }

           </div>
           </div>
       </div>

    );
}
export default Maincontent;