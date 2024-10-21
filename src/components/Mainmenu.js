import React from 'react'
import { NestedItem } from './NestedItem'
import { useState } from 'react'
const Mainmenu = ({resData}) => {
        const [clicked, setclicked] = useState(false)
      const handleClick = ()=>{
           !clicked ? setclicked(true) : setclicked(false) 
      }


    console.log("Res Data pass successfully",resData);
  return (
     <div className='flex-col  flex gap-[20px] border-solid border-2 border-black'>
      
    <div className='flex justify-between w-full '> <h1 className='font-bold text-lg pl-[12%]'>{resData?.card?.card?.title}</h1>  <img onClick={handleClick} className='w-[30px] mr-[17%]' src={"https://w7.pngwing.com/pngs/410/111/png-transparent-down-arrow-logo-arrow-down-android-down-arrow-hand-triangle-internet-thumbnail.png"}/>   </div>
     {
       
       resData?.card?.card?.itemCards.map((res,index)=>{return (
  
            clicked ? <NestedItem key={index} Resdata={res}/> : <div className='w-0 h-0'></div>
                
    
       )})
      

     }


   </div>
  )
}

export default Mainmenu