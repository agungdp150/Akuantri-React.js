import React, { Component } from 'react'


// Import Component
import Background from '../Component/Background.js';
import NewLogo from "../Component/NewLogo.js";
import Carousel from "../Component/Carousel.js";
import CardServices1 from "../Component/CardServices1.js";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Background />
        <NewLogo/>
        <Carousel/>
        <CardServices1/>
      </div>
    )
  }
}
