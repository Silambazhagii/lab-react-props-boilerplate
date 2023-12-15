import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{

  // code here
  render(){
    let i_data = this.props.fghj();
    console.log(i_data)
  return(
    <>
    <h2 className="heading">Image Gallery using class</h2>
     <div className='body'>
    {i_data.map((obj)=>{
      return(
        <img src = {obj.img}></img>
      )
    })}
    </div> 
    </>
   

  )
  }
}
