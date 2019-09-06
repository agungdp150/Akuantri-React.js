import React, {Component}from 'react'
import {Link} from "react-router-dom"

export default class Background extends Component {
  render() {
    return (
    <div className="background">
      <section class="text-design">
        <h1>Gojek <br/> Mempersembahkan <br/> CERDIKIAWAN <br/> AWARDS</h1>
        <p>#PastiAdaJalan</p>
        <Link to="/"> 
        Selengkapnya
        </Link>
        </section>
      </div>
    )
  }
}