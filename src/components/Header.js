import {useState,useEffect} from "react"
import { Link } from "react-router-dom";


const Header = () =>{
   const setdata = () =>{
      setlogg("logout");
   }
    const [logg, setlogg] = useState("login");
    

    return(
          <div className="flex justify-between mt-5 pr-3 pl-3 border-dashed border-4 border-cyan-200  ">
 
             <div className="flex items-center  ">
             <img className="w-32" src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"/>
             <p>Other</p>
             <img/>
             </div>
             <div className="flex gap-4  items-center">
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
              </div>
              <button  onClick={setdata}type="button" class="  text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">{logg}
              </button>
 
 
 
             </div>
 
     
     
          </div>
 
    );
 };


 export default Header;  //we use export ("DEFAULT") Whenever we want to export only one Component.