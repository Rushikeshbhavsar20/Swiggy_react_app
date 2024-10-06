

export const Rescard = ({resData}) =>{
 
    const{ name } = resData.info;
    const{ cloudinaryImageId } = resData.info;
    const{ sla } = resData.info;
    const{ avgRating } = resData.info;
    const{ areaName } = resData.info;
    const{ cuisines} = resData.info;

   return( 
   <div className="res-card">
         <div className="image">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId }/>
         </div>
        <div className="rescardinfo">
            <h1 className="hotelname">{name}</h1>
            <div className="rating">
              <img src="https://www.svgrepo.com/show/526298/star-circle.svg"/>
              <h1 className="rescard-font">{avgRating}</h1><h1 className="rescard-font">{sla.slaString}</h1>
             </div>
             <p className="rescard-font2" >{cuisines.join(",")}<br></br>
                 {areaName}
               </p>
            </div>
   </div>
   );
}

//we can also export in this way this way is actually use when we have to export multiple components'
//here we have only one component but if we have suppose another component over here we have to write export infronrt of all the component present in the class
//export default willl not work here only one export default is alowed in one file
