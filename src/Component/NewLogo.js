import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class NewLogo extends Component {
  render() {
    return (
      <div className="gojek-logo">
        <section class="box-1">
          <img src="https://lelogama.go-jek.com/cache/bb/86/bb862327e8e50b425964267cd735f8f9.jpg" alt="gojek-intro" class="gojek-pict"/>
          <div class="bungkus-1">
            <h2>Kenalin Solv, logo baru Gojek</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quos aut voluptate iste perferendis at quod, quo ratione obcaecati necessitatibus pariatur voluptates vero reprehenderit ex deserunt dicta soluta ut quas!</p>
            <Link to="/">Cari Tau di sini <i class="fas fa-arrow-right"></i></Link>
            </div>
          </section>
      </div>
    )
  }
}
