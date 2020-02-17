import React, { Component } from "react";

import "../scss/Search.scss";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
  }

  handleChange = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  handleSearch = e => {
    // connect to amazon api, search for user search keywords
    if (e.keyCode === 13 || e.target.type === "submit") {
      console.log(this.state.searchQuery);
      this.setState({
        searchQuery: ""
      });
    }
  };

  render() {
    return (
      <div className="header-search">
        <div className="row">
          <div className="column">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input type="search" placeholder="Search for anything on Amazon.." className="input search-input" />
                <span className="icon is-left">
                  <i className="fa fa-search"></i>
                </span>

                <span className="icon is-right">
                  <i className="fa fa-globe"></i>
                </span>
              </p>
            </div>
          </div>
          <div className="column">
            <input type="submit" value="Search" className="search-button" onClick={this.handleSearch} />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
