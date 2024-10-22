import React from 'react'
import { NestedItem } from './NestedItem'

const Mainmenu = ({resData , showItem,ExpandItems}) => {
        
      const handleClick = ()=>{

        
         ExpandItems();
      }


    console.log("Res Data pass successfully",resData);
  return (
     <div className='flex-col  flex gap-[20px] '>
      
    <div className='flex justify-between w-full '> <h1 className='font-bold text-lg pl-[12%]'>{resData?.card?.card?.title}</h1>  <img onClick={handleClick} className='w-[30px] mr-[17%]' src={"https://w7.pngwing.com/pngs/410/111/png-transparent-down-arrow-logo-arrow-down-android-down-arrow-hand-triangle-internet-thumbnail.png"}/>   </div>
     {
       
       showItem ? resData?.card?.card?.itemCards.map((res,index)=>{return (
  
           <NestedItem key={index} Resdata={res}/> 
                
    
       )}): <div className=' h-[10px] bg-[#f2f2f3] mb-[10px] ml-[10%] mr-[15%] rounded-sm'> </div> 
      

     }


   </div>
  )
}

export default Mainmenu