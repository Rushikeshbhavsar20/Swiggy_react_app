import { useNavigate } from "react-router-dom";







export const Rescard = ({resData}) =>{
    const navigate = useNavigate();
    const{ name } = resData.info;
    const{ cloudinaryImageId } = resData.info;
    const{ sla } = resData.info;
    const{ avgRating } = resData.info;
    const{ areaName } = resData.info;
    const{ cuisines} = resData.info;
    const {id} = resData.info
   
    
     const handleClick = ()=>{
        navigate(`/restaurant/${id}`);
        
     }
    
   return( 
   <div className=" pt-2 flex-col w-[230px] h-[272px] flex-none   transition-all ease-in-out hover:z-10 hover:scale-[0.85] z-10 " onClick={handleClick}>
         <div className="w-full h-[132px] ">
            <img className=" w-full h-full object-center object-cover rounded-[21px] " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId }/>
         </div>
        <div className="rescardinfo">
            <h1 className="text-[18px] font-semibold ">{name}</h1>
            <div className="flex gap-1 ">
              <img className="w-5" src="https://www.svgrepo.com/show/526298/star-circle.svg"/>
              <h1 className="text-[16px] ">{avgRating}</h1><h1 className="rescard-font">{sla.slaString}</h1>
             </div>
             <p className=" w-[100%] text-[16px]  line-clamp-1  text-wrap text-ellipsis break-words " >{cuisines.join(",")}</p>
               <p className="text-[16px] line-clamp-1 text-wrap break-words overflow-hidden text-ellipsis">  {areaName} </p> 
            </div>
   </div>
   );
}

//we can also export in this way this way is actually use when we have to export multiple components'
//here we have only one component but if we have suppose another component over here we have to write export infronrt of all the component present in the class
//export default willl not work here only one export default is alowed in one file
