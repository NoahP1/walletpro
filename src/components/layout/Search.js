import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Search.scss";

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

  // scrape amazon search results, use user input as the search keywords
  handleSearch = e => {
    e.preventDefault();
    this.props.searchData(this.state.searchQuery);
    this.props.history.push("/search/" + this.state.searchQuery);
  };

  render() {
    return (
      <form className="header-search">
        <div className="row">
          <div className="column">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  type="search"
                  placeholder="Search for anything on Amazon.."
                  className="input search-input"
                  onChange={this.handleChange}
                />
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
      </form>
    );
  }
}

export default withRouter(Search);
