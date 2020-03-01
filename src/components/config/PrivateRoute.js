import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

// sets up private routes that only logged in users can access.

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps => (!!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={"/login"} />)}
    />
  );
};

export default PrivateRoute;
