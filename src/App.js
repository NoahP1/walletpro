import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import { AuthProvider } from "./components/config/Auth";
import PrivateRoute from "./components/config/PrivateRoute";

import "./App.scss";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/" exact component={Home} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
