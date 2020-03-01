import React, { Component } from "react";
import { Link } from "react-router-dom";
import Firebase from "../config/Firebase";
import { AuthContext } from "../config/Auth";

import logo from "../../images/wp-dark.png";
// import getBTCValue from "btc-value";

import "./Navigation.scss";

export class Navigation extends Component {
  state = {
    BTCValue: 0
  };
  render() {
    // get the current bitcoin value using the btc-value npm package
    // getBTCValue().then(value => {
    //   this.setState({
    //     BTCValue: value
    //   });
    // });
    const logout = e => {
      e.preventDefault();
      Firebase.auth().signOut();
    };
    // display the correct navigation links depending on whether an authorized user is logged in or not.
    let navLinks;
    if (this.context.currentUser) {
      navLinks = (
        <div>
          <Link to="/dashboard" className="navigation-link">
            Dashboard
          </Link>
          <Link to="" className="navigation-link" onClick={logout}>
            Logout
          </Link>
        </div>
      );
    } else {
      navLinks = (
        <div>
          <Link to="/register" className="navigation-link">
            Register
          </Link>
          <Link to="/login" className="navigation-link">
            Login
          </Link>
        </div>
      );
    }

    return (
      <div className="row">
        <div className="column">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="WalletPro" />
            </Link>
          </div>
          <div className="btc-value">
            {/* formats the BTC string value */}
            BTC:&nbsp;${this.state.BTCValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
        </div>
        <div className="column">
          {/* display the correct navigation links */}
          <nav className="navigation">{navLinks}</nav>
        </div>
      </div>
    );
  }
}

Navigation.contextType = AuthContext;

export default Navigation;
