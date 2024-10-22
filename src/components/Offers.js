import Usercontext from "../../utils/Usercontext";

const Offers = ()=>{
    return(
         <div className="m-[120px]">
             <h1>This is Offers page</h1>
             <Usercontext.Consumer>
              {(data)=>{
                    const {loggedUser} = data;
                    return <h1 >{loggedUser} <p className="bg-red-400">This value is using UserContext.Consumer and <br></br>The above Username is comming from UserContext.provider which is in app.js</p></h1>
                }}
             </Usercontext.Consumer>
         </div>
    );
  
  }
  
  export default Offers