import React, { useEffect } from "react";
import panda from "../images/panda.jpg";
import "./splash.css";
const Splash = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      history.push("/login");
    }, 3000);
  }, []);
  return (
    <div>
      <div className="panda-splash-logo">
        <img src={panda} className="splash-logo" />

        <p className="splash-logo-txt">FoodPanda</p>
      </div>
    </div>
  );
};

export default Splash;
