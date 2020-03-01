import React, { Component } from "react";

import "./Header.scss";

import Navigation from "./Navigation";
import Search from "../layout/Search";

export class Header extends Component {
  getSearchData = data => {
    this.props.searchData(data);
  };
  render() {
    return (
      <header className="header">
        <div className="container">
          <Navigation />
          {/* separating out the search component allows it to be hidden when not in the search section. The earners section for example. */}
          <Search searchData={this.getSearchData} />
        </div>
      </header>
    );
  }
}

export default Header;
