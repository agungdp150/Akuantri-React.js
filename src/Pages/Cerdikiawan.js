import React, { Component } from 'react'

// Import Component
import Background1 from "../Component/Cerdikiawan/Background1.js";
import AboutCerdikiawan from "../Component/Cerdikiawan/AboutCerdikiwan.js";
import CarouselCer from "../Component/Cerdikiawan/CarouselCer.js";

export default class Cerdikiawan extends Component {
  render() {
    return (
      <div>
        <Background1/>
        <AboutCerdikiawan/>
        <CarouselCer/>
      </div>
    )
  }
}
