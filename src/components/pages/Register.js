import React, { useCallback } from "react";
import { withRouter } from "react-router";
import Firebase from "../config/Firebase";
import "../scss/Register.scss";

const Register = ({ history }) => {
  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        const registerUser = await Firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
        await Firebase.firestore()
          .collection("users")
          .doc(registerUser.user.uid)
          .set({});
        history.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  return (
    <div className="register">
      <div className="container">
        <h1>Register</h1>
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
              <button className="button is-success">Register</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Register);
