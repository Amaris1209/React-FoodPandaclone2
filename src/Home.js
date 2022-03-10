import React from "react";
import app from "./base";
import "./home.css";
import cart from "../src/images/cart.png";
import output from "../src/images/output-onlinepngtools.png";
import thali from "../src/images/thali.png";
import kky from "../src/images/kky.png";
import Chefpanda from "../src/images/Chefpanda.png";
import foodpanda from "../src/images/foodpanda-clones.png";
import Pandamart from "../src/images/Pandamart.jpg";
import pandapickup from "../src/images/pandapickup.png";

const Home = ({ history }) => {
  return (
    <div>
      <div className="Navbar-home">
        <p className="Nav-home-txt">
          {" "}
          Curent Location <br />
          <p className="home-inner-txt"> Karachi</p>
          <img
            src={cart}
            className="home-cart-logo"
            style={{
              width: "40px",
              float: "right",
              marginRight: "50px",
              marginTop: "-60px",
            }}
          />
          <input
            className="home-searchbar"
            type="search"
            placeholder="search for shops and restraunts"
          />
        </p>
      </div>
      <input type="checkbox" id="check" />
      <label for="check">
        <i id="cancel"> X</i>
        <i id="btn">
          {" "}
          <img
            src={output}
            className="home-bars-logo"
            style={{
              backgroundColor: "white",
              width: " 40px",
              marginTop: "-15px",
            }}
          />{" "}
        </i>
      </label>
      <div className="home-sidebar">
        <header> My Profile</header>
        <ul>
          <li>
            <a>Your Orders</a>
          </li>
          <li>
            <a>Your cart</a>
          </li>
          <li>
            <a>Your favourites</a>
          </li>
          <li>
            <a>Recent Orders</a>
          </li>
          <li>
            <a>Deals</a>
          </li>{" "}
          <li>
            <a>FAQs</a>
          </li>{" "}
          <li>
            <a onClick={() => app.auth().signOut()}>LogOut</a>
          </li>
        </ul>
      </div>
      <div
        className="Doc-1"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "1400px",
        }}
      >
        <p
          className="bold-1"
          style={{ fontSize: "35px", marginLeft: "-170px" }}
        >
          Good afternoon,
        </p>
        <p
          className="doc-und"
          style={{
            fontSize: "20px",
            marginTop: "-20px",
            marginLeft: "-115px",
          }}
        >
          Thinking of food ? There are many <br />
          restraunts in your area
        </p>
        <img
          src={kky}
          classname="kky"
          style={{
            width: "300px",
            borderRadius: "10%",
            marginLeft: "3000px",
            marginTop: "-172px",
          }}
        />
        <img
          src={thali}
          classname="thali"
          style={{
            width: "300px",
            borderRadius: "10%",

            paddingLeft: "1650px",
            marginTop: "-150px",
          }}
        />
      </div>
      <div className="Hooks">
        <div className="Delivery">
          <img
            src={foodpanda}
            className="deliverysys"
            onClick={() => {
              history.push("/delivery");
            }}
            style={{ width: "600px", height: "600px" }}
          />{" "}
        </div>
        <div className="Mart">
          <img
            src={Pandamart}
            className="Martsys"
            style={{ width: "600px", height: "600px" }}
          />
        </div>
        <div className="Pickup">
          <img
            onClick={() => {
              history.push("/pick");
            }}
            src={pandapickup}
            className="pickupsys"
            style={{ width: "600px", height: "600px" }}
          />
        </div>
      </div>
      <p
        className="Deals"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "30px",
          marginRight: "1590px",
        }}
      >
        Add your Deals
      </p>
      <div
        className="hook2"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <img
          src={Chefpanda}
          className="Chef"
          style={{ width: "500px", height: "500px" }}
        />

        <img
          src={Pandamart}
          className="Martsys"
          style={{ width: "500px", height: "500px" }}
        />

        <img
          src={pandapickup}
          className="pickupsys"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
    </div>
  );
};

export default Home;
