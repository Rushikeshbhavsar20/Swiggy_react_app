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
       <div className="flex-col">
            <div className="flex justify-center pt-4 gap-4">
                  <input type="text" className="border-black border-solid border-2 rounded-md pr-2 h-7" value={text} onChange={(e)=>{ 
                         settext(e.target.value.toLowerCase());
                  }} />
                  <button className=" text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2 h-7 " onClick={searchRestaurant}>search</button>
              </div>
           <div className="flex justify-center pt-3 pr-20">
            <button className=" text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2 h-7 "  onClick={Filter} >Filter the Restaurant</button>
           </div>
           <div className="pl-[12%] pr-[12%] "> 
           <div className="flex flex-wrap  gap-14 pl-7  "> 
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