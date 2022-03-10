import React from "react";
import cart from "../../src/images/cart.png";
import output from "../../src/images/output-onlinepngtools.png";
import "./delivery.css";
import deal0 from "../../src/images/deal0.png";
import deal1 from "../../src/images/deal1.jpg";
import deal2 from "../../src/images/deal2.jpg";
import deal3 from "../../src/images/deal3.png";
import deal4 from "../../src/images/deal4.jpg";
import deal5 from "../../src/images/deal5.jpg";
import deal6 from "../../src/images/deal6.jpg";
import deal7 from "../../src/images/deal7.webp";
import food0 from "../../src/images/food0.jpeg";
import food1 from "../../src/images/food1.jpg";
import food2 from "../../src/images/food2.webp";
import food3 from "../../src/images/food3.jpeg";
import food4 from "../../src/images/food4.jpg";
import food5 from "../../src/images/food5.jpg";
import food6 from "../../src/images/food6.jpg";
import homefood0 from "../../src/images/homefood0.png";
import homefood1 from "../../src/images/homefood1.webp";
import homefood2 from "../../src/images/homefood2.jpg";
import homefood3 from "../../src/images/homefood3.jpg";
import homefood4 from "../../src/images/homefood4.jpg";
import homefood5 from "../../src/images/homefood5.jpg";
import homefood6 from "../../src/images/homefood6.jpg";
import homefood7 from "../../src/images/homefood7.jpg";

export const Delivery = () => {
  return (
    <div>
      <div className="del-Navbar">
        <p className="del-Nav-1-txt">
          {" "}
          Curent Location <br />
          <p className="del-inner-txt"> Karachi</p>
          <img
            src={cart}
            className="del-cart-logo"
            style={{
              width: "40px",
              float: "right",
              marginRight: "50px",
              marginTop: "-60px",
            }}
          />
          <input
            className="del-searchbar"
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
            className="del-bars-logo"
            style={{
              backgroundColor: "white",
              width: " 40px",
              marginTop: "-15px",
            }}
          />{" "}
        </i>
      </label>
      <div className="del-sidebar">
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
            <a>Log Out</a>
          </li>
        </ul>
      </div>

      <div
        className="del-papa"
        // style={{
        //   display: "inline-block",
        // //   flexDirection: "row",
        //   //   flexWrap: "wrap",
        //   gap: "3vh",
        // }}
      >
        <div className="box1" style={{ width: "300px", height: "200px" }}>
          <img src={deal0} className="pic-del-add" />
        </div>
        <div className="box1" style={{ width: "300px", height: "200px" }}>
          <img src={deal1} className="pic-del-add" />
        </div>
        <div className="box1" style={{ width: "300px", height: "200px" }}>
          <img src={deal2} className="pic-del-add" />
        </div>
        <div className="box1" style={{ width: "300px", height: "200px" }}>
          <img src={deal3} className="pic-del-add" />
        </div>
        <div className="box1" style={{ width: "300px", height: "200px" }}>
          <img src={deal4} className="pic-del-add" />
        </div>
        <div className="box1" style={{ width: "300px", height: "200px" }}>
          <img src={deal5} className="pic-del-add" />
        </div>
        <div className="box1" style={{ width: "300px", height: "200px" }}>
          <img src={deal6} className="pic-del-add" />
        </div>
        <div className="box1" style={{ width: "300px", height: "200px" }}>
          <img src={deal7} className="pic-del-add" />
        </div>
        <div className="box1" style={{ width: "300px", height: "200px" }}>
          <img src={deal0} className="pic-del-add" />
        </div>
      </div>
      <div className="pandapicks-txt">
        <p className="pandapick-para"> pandapicks</p>
      </div>
      <div className="del-food-papa">
        <div
          className="del-food-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={food0} className="pic-food-del-add" />
          <p className="tag-del-sales">Save 40% </p>
          <p className="Ratings"> 4.1(1.5k)</p>
          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-food-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={food1} className="pic-food-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-food-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={food2} className="pic-food-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-food-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={food3} className="pic-food-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-food-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={food4} className="pic-food-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-food-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={food5} className="pic-food-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-food-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={food6} className="pic-food-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-food-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={food3} className="pic-food-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-food-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={food1} className="pic-food-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
      </div>
      <div className="Homechef-txt">
        <p className="Homechef-para"> Home chef - Flash deals/discounts</p>
      </div>

      <div className="del-homefood-papa">
        <div
          className="del-homefood-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={homefood0} className="pic-homefood-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-homefood-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={homefood1} className="pic-homefood-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-homefood-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={homefood2} className="pic-homefood-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-homefood-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={homefood3} className="pic-homefood-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-homefood-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={homefood4} className="pic-homefood-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-homefood-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={homefood5} className="pic-homefood-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-homefood-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={homefood6} className="pic-homefood-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-homefood-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={homefood7} className="pic-homefood-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
        <div
          className="del-homefood-box1"
          style={{ width: "300px", height: "200px" }}
        >
          <img src={homefood1} className="pic-homefood-del-add" />
          <p className="tag-del-sales">Save 40% </p>

          <p className="Ratings"> 4.1(1.5k)</p>

          <p className="brandname"> Burger Shop</p>
          <p className="price">$$. Burgers </p>
          <p className="deliveryfees"> Rs.90.00 </p>
        </div>
      </div>
    </div>
  );
};
