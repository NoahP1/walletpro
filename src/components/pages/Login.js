import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import Firebase from "../config/Firebase";
import { AuthContext } from "../config/Auth";

const Login = ({ history }) => {
  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await Firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <p className="control has-icons-left">
              <input type="email" name="email" placeholder="E-Mail" className="input" />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input type="password" name="password" placeholder="Password" className="input" />
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success login-button">Login</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
