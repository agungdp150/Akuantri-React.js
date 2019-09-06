import React from "react"


// Import Component
import PilarTemp from "./PilarTemp.js";


// Import Data
import TigaPilar from "../../Assets/Data/TigaPilar.js";

const TPilar = () => {
  const  pilar = TigaPilar.map( (element, i) => {
    return <PilarTemp id={TigaPilar[i].id} image={TigaPilar[i].img} title={TigaPilar[i].title} desc={TigaPilar[i].desc}/>
  }) 
  return (
    <div>
      <div className="ab-pilar">
        <h1>Tiga Pilar Gojek</h1>
      </div>
      <div className="pilar-1">
      {pilar}
      </div>
    </div>
  )
}

export default TPilar;
