import React, { Component } from "react";

import "../scss/Header.scss";

import Logo from "../elements/Logo";
import BTCValue from "../elements/BTCValue";
import Navigation from "./Navigation";
import Search from "../layout/Search";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="column">
              <Logo />
              <BTCValue />
            </div>
            <div className="column">
              <Navigation />
            </div>
          </div>
          <Search />
        </div>
      </header>
    );
  }
}

export default Header;
