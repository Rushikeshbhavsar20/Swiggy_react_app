import {useState,useEffect, useContext} from "react"
import { Link } from "react-router-dom";
import Usercontext from "../../utils/Usercontext";
import { useSelector } from "react-redux";
const Header = () =>{

   const item =   useSelector((state)=>state.mycart.items)

   const setdata = () =>{
      setlogg("logout");
   }
    const [logg, setlogg] = useState("login");
    const {loggedUser} = useContext(Usercontext);

    return(
          <div className="w-full  top-0 left-0 right-0 fixed flex justify-between pt-2 pr-3 pl-3 bg-white h-[80px] z-40 ">
 
             <div className="flex items-center ">
             <img className="w-12 pb-3 transition-all ease-in hover:scale-[1.09] " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800,h_800/portal/m/logo_192x192.png"/>
             <p className="pl-4 ">Other</p>
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
              <p> <Link to="">Cart-  { item.length == 0 ? (<p> ( Empty )</p>) : (<p>{item.length}</p>) } </Link></p>
              </div>
              <div>
              <img/>
              <p> <Link to="">Sign-in</Link></p>
              </div>
              <div>
              <img/>
              <p> <Link className="bg-blue-100" to="">{loggedUser}</Link></p>
              </div>
              <div>
              </div>
              <button  onClick={setdata}type="button" className=" text-white bg-[#ff5200] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">{logg}
              </button>
 
 
 
             </div>
 
     
     
          </div>
 
    );
 };


 export default Header;  //we use export ("DEFAULT") Whenever we want to export only one Component.