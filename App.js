import React from "react"
import ReactDOM from "react-dom/client"

const Rescard = (props) =>{
   return( 
   <div className="res-card">
         <div className="image">
            <img src="https://static.toiimg.com/thumb/msid-66145888,imgsize-116131,width-400,resizemode-4/66145888.jpg"/>
         </div>
        <div className="rescardinfo">
            <h1 className="hotelname">Shree Naivedyam</h1>
            <div className="rating">
              <img src="https://www.svgrepo.com/show/526298/star-circle.svg"/>
              <h1 className="rescard-font">4.4</h1><h1 className="rescard-font">55-60 Mins</h1>
             </div>
             <p className="rescard-font2" >North Indian, Chinese,South Indian <br></br>
                 Chhindwad City.
               </p>
            </div>
   </div>
   );
}
const Maincontent = () =>{
    return(
       <div className="mainc">
           <div className="search">
            <input type="text"></input>
            <p>Search</p>
           </div>
           <div className="rescardmanager"> 
           <div className="res-container">
               <Rescard />
               <Rescard />
               <Rescard />
               <Rescard />
               <Rescard />
               <Rescard />
               <Rescard />
               <Rescard />
           </div>
           </div>
       </div>

    );
}
const Header = () =>{
   return(
         <div className="navbar">

            <div className="left">
            <img className="logoo" src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"/>
            <p>Other</p>
            <img/>
            </div>
            <div className="right">
             <div>
             <img />
             <p>Swiggy Corporate</p>
             </div>
             <div>
             <img/>
             <p>Search</p>
             </div>
             <div>
             <img/>
             <p>offers</p>
             </div>
             <div>
             <img/>
             <p>Help</p>
             </div>
             <div>
             <img/>
             <p>Sign In</p>
             </div>
             <div>
             <img/>
             <p>Cart</p>
             </div>



            </div>

    
    
         </div>

   );
};
const Applayout =  () =>{
    return ( <div className="app">
              <Header />
              <Maincontent/>   
        </div>
  
    );
}

const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(<Applayout />)