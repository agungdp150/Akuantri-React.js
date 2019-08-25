import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header class="nav-container">
          <nav>
            <Link to="/">
            <img src="https://lelogama.go-jek.com/service_icon_text/gojek-logo_normal.svg" alt="gojek-logo" class="logo"/>
            </Link>
              <ul class="nav-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About</Link>
                  </li>
                <li>
                  <Link to="/cerdikiawan">Cerdikiawan</Link>
                  </li>
              </ul>
              <div class="box">
                <select name="" id="">
                  <option value="">Bahasa Indonesia</option>
                  <option value="">English</option>
                  </select>
                </div>
            </nav>
          </header>
        </div>
    )
  }
}



