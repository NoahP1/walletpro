import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Firebase from "../config/Firebase";
import { AuthContext } from "../config/Auth";

import "../scss/Navigation.scss";

const Navigation = () => {
  const logout = e => {
    e.preventDefault();
    Firebase.auth().signOut();
  };
  const { currentUser } = useContext(AuthContext);

  let navLinks;

  if (currentUser) {
    navLinks = (
      <div>
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

  return <nav className="navigation">{navLinks}</nav>;
};

export default Navigation;
