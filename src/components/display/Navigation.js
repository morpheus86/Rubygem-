import React from "react";
import { Link } from "react-router-dom";
import Signin from "./Signin";
import SignOut from "./SignOut";

const Navigation = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Home
        </Link>
        <Signin />
        <SignOut />
      </div>
    </nav>
  );
};

export default Navigation;
