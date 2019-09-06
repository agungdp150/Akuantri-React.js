import React from "react";


const PilarTemp = (props) => {
  return (
    <div>
      <div className=""> 
      <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
      <p>{props.desc}</p>
      </div>
    </div>
  );
}



export default PilarTemp;