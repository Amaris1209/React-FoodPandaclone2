import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import "./signup.css";
import panda from "./images/panda.jpg";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <div className="sign-house">
        <img src={panda} style={{ width: "250px", borderRadius: "50%" }} />
        <h1 className="signup-header">Sign up</h1>
        <form onSubmit={handleSignUp}>
          <label>
            <p className="lbl-2-e">Email</p>p
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="inp-email"
            />
          </label>
          <label>
            <p className="lbl-2-p"> Password </p>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="inp-pass"
            />
          </label>
          <button className="sgn-2-btn" type="submit">
            <p className="sin-2-andar"> Sign Up </p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
