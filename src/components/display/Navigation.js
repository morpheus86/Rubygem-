import React from "react";
import { Link } from "react-router-dom";
import Signin from "./Signin";
import SignOut from "./SignOut";
import { connect } from "react-redux";

const Navigation = props => {
  const { auth, profile } = props;
  const links = auth.uid ? <Signin profile={profile} /> : <SignOut />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Home
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapState = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default connect(mapState)(Navigation);
