import React, {Component}from 'react'
import {Link} from "react-router-dom"

export default class Background extends Component {
  render() {
    return (
    <div className="background">
      <section class="text-design">
        <h1>Gojek <br/> Mempersembahkan <br/> CERDIKIAWAN</h1>
        <p>#PastiAdaJalan</p>
        <Link to="/"> 
        <i class="fas fa-play-circle"></i>Lihat Video
        </Link>
        </section>
      </div>
    )
  }
}


