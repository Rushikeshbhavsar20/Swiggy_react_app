import { useEffect, useState } from "react";


const RestaurantDetail = () => {
  
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



     
     if (loading) return <p className="Loader"> Loading...</p>;
     if (error) return <p>{error}</p>;
     let text = "No Data Available"
     let carousel = [];
     try{   
      text = resdetail?.data?.cards[0]?.card?.card.text|| {};
      carousel = resdetail?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel || [];
      console.log(text);
      console.log(carousel);
      

     }catch(err){
      setError("failed to get top picks")
      console.log(err);
     }
  


     if (error) return <p>{error}</p>;
     if (carousel.length === 0) {
      return <p>No carousel data available.</p>; // Handle empty carousel case
     }  
     
     
     


     return (
      <div className='ResDetail'>
        <div className='part1'>
  
         <p>Top Picks</p>
        <div className='buttons'>
               <button className='left-btn'>
               <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
              
               </button>
               <button className='right-btn'>
               <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
               </button>
        </div>
  
        </div>
  
        <div className='card-slider'>



              {carousel.map((res)=>{  
                const price = res.dish.info.price || "";
                const backgroundImage = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${res.creativeId}`|| "";


                return (
                <div className='card'   style={{ backgroundImage: `url(${backgroundImage})` }} >
                <div>
                 <div className='bottom1'>
                              <p className='price'>{"₹"+price/100}</p>
                              <button className='btn'>ADD</button> 
                             

                </div>
    
              </div>
                     
            </div>

            
                
            );    
                
                
                })  }





      
           
            
            
   
        </div>
        <div className="divider"></div>
      </div>
    )
}

export default RestaurantDetail