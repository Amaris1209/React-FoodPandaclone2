import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import "./login.css";
import panda from "../src/images/panda.jpg";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <div className="login-House">
        <img src={panda} style={{ width: "250px", borderRadius: "50%" }} />
        <h1 className="house-header">Log in</h1>
        <form onSubmit={handleLogin}>
          <label>
            <p className="label-E"> Email</p>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="email-login"
            />
          </label>
          <label>
            <p className="label-p">Password</p>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="pass-login"
            />
          </label>
          <button type="submit" className="login-btn">
            <p className="lgn-andar"> Log in </p>
          </button>
          <br />
          <button
            type="button"
            className="signup-1-btn"
            onClick={() => history.push("/signup")}
          >
            <p className="sgn-andar"> Sign Up </p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
