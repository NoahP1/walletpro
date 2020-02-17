import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/wp-dark.png";
import "../scss/Logo.scss";

export class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="WalletPro" />
        </Link>
      </div>
    );
  }
}

export default Logo;
