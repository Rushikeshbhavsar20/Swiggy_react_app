import {useState,useEffect} from "react"


const Header = () =>{
   const setdata = () =>{
      setlogg("logout");
   }
    const [logg, setlogg] = useState("login");
    

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
              <div>
             <button className="login" onClick={setdata} >{logg}</button>
              </div>
 
 
 
             </div>
 
     
     
          </div>
 
    );
 };


 export default Header;  //we use export ("DEFAULT") Whenever we want to export only one Component.