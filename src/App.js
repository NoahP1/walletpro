import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./components/config/Auth";
import PrivateRoute from "./components/config/PrivateRoute";

import Page404 from "./components/pages/Page404";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard/Dashboard";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import "./App.scss";
import SearchResults from "./components/layout/SearchResults";

class App extends React.Component {
  state = {
    searchData: ""
  };
  getSearchData = data => {
    this.setState({
      searchData: data
    });
  };
  render() {
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <Header searchData={this.getSearchData} />
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/search/:id" component={() => <SearchResults searchQuery={this.state.searchData} />} />
              <Route path="/" exact component={Home} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
              <Route component={Page404} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
