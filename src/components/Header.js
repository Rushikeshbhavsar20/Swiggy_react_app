import {useState,useEffect} from "react"
import { Link } from "react-router-dom";


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
              <p> <Link to="/about">About</Link> </p>
              </div>
              <div>
              <img/>
              <p> <Link to="">Search</Link></p>
              </div>
              <div>
              <img/>
              <p> <Link to="/offers">offers</Link></p>
              </div>
              <div>
              <img/>
              <p> <Link to="">About</Link></p>
              </div>
              <div>
              <img/>
              <p> <Link to="">Help</Link></p>
              </div>
              <div>
              <img/>
              <p> <Link to="">Sign-in</Link></p>
              </div>
              <div>
             <button className="login" onClick={setdata} >{logg}</button>
              </div>
 
 
 
             </div>
 
     
     
          </div>
 
    );
 };


 export default Header;  //we use export ("DEFAULT") Whenever we want to export only one Component.