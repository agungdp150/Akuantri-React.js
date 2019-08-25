import React from "react";

//Import Data
// import Services1 from "../Assets/Data/Services1.js"

const ServicesMess = (props) => {
  return (
    <div>
      <div className="card1"> 
      <img src={props.image} alt={props.id}/>
      <p>{props.desc}</p>
      </div>
    </div>
  );
}



export default ServicesMess;