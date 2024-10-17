//created a class component 
import React from "react";

class About extends React.Component{
      constructor(props){
         super(props)
      console.log("constructed created");
      
         this.state = {
            count:0,
         };
      }   
      update (){
            this.setState({count : this.state.count+1})
      }
      render(){
        console.log("rendered");
        
        return(  <div className="about">
              <p>This is about page</p>
              <p>count :{this.state.count}</p>
              <button onClick={ ()=>{ this.update() }  }>Button</button>
         </div>);
   

      }

    componentDidMount(){
          console.log("mounted");
          
    }
    componentDidUpdate(){
      console.log("updated");
      
    }
   
}

export default About;