import React, { Component } from 'react'

// Import Component 
import Semangat from "../Component/About/Semangat.js"
import TPilar from "../Component/About/TPilar.js"
import Layanan from "../Component/About/Layanan.js";
import CarouselAb from "../Component/About/CarouselAb.js"
import Official from "../Component/About/Official.js"


export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Semangat/>
        <TPilar/>
        <Layanan/>
        <CarouselAb/> 
        <Official/>
      </div>
    )
  }
}
