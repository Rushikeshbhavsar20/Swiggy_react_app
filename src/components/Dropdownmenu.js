import React, { useEffect, useState } from 'react'


const Dropdownmenu = () => {
  
   const[carousel,setcarousel] = useState([]);
   const[recommended,setrecommended]=useState([])
   useEffect(()=>{
          fetchdata();
   },[])


     const  fetchdata = async ()=>{
       const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId=328616&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json);
        
         const carousel = await json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;
         const recommended =  await   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

         setcarousel(carousel)
         setrecommended(recommended);


         console.log(carousel);
         console.log(recommended);
         
      }
      
      if(recommended.length == 0){
        return(<div>Loading.............</div>)
      }
        
      

       

  return  (
    <div className='Meunu'> 
    {recommended.map((res)=>{return (
      <div className='dropmenu'>
      <div className='dcard'>
          <div className='info'>
               <img className='vegimg' src={'https://openclipart.org/image/800px/304248'} />
               <p className='nameres'>{res?.card?.info?.name}</p>
               <p>₹{res?.card?.info?.price/100}</p>
               <div className='ratingimg'>
           <div className='drating'> <p>{res?.card?.info?.ratings?.aggregatedRating.rating}</p> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" fillColor="#116649"><rect width="14" height="14" fill="white"></rect><path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill="#116649"></path></svg> <p>({res?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>  </div>
              </div> 
               <p> {res?.card?.info?.description} </p>
          </div>
          <div className='food-img'>
             <img className='foodimg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${res?.card?.info?.imageId}`} />
                   <button className='button'>ADD</button> 
          </div>
      </div>

  </div>





    ) })}

</div>
  )

}

export default Dropdownmenu