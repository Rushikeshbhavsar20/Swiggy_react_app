import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NestedItem } from './NestedItem';
import Mainmenu from './Mainmenu';

const Dropdownmenu = () => {




  const id = useParams();

  const {resid} = id;
  

   const[Category,setCategory]=useState([])
   useEffect(()=>{
          fetchdata();
   },[])


     const  fetchdata = async ()=>{
       const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json();
      
        
         
         const Cat =  await json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res)=>{return res?.card?.card?.['@type'] ===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" });
        
         
 
         setCategory(Cat)
       

         
         console.log("this is rec",Cat);
         
      }
      
      if(Category.length == 0){
        return(<div>Loading.............</div>)
      }
        


  return  (
    <div className='flex flex-col   mt-[120px]  '> 
  

    {Category.map((res,index)=>{
      console.log(res);
      return(

        <Mainmenu  key={index} resData={res}  />
      )
       
  })}

  

</div>
  )

}

export default Dropdownmenu