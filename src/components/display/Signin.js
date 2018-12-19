import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const Signin = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/favorite"> Favorites </NavLink>
      </li>
      <li>
        <a onClick={props.signOut}> Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatch = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(
  null,
  mapDispatch
)(Signin);
