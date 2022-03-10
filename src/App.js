import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Splash from "./pages/Splash";
import { Delivery } from "./pages/Delivery";
import Pickup from "./pages/Pickup";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Splash} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/pick" component={Pickup} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
