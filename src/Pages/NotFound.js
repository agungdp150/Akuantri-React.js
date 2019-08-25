import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img src="https://bilba.go-jek.com/images/404.png" alt="Not Found 404"/>
        </Link>
      </div>
    )
  }
}
