import React from "react";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/createproject"> NewProject</NavLink>
      </li>
      <li>
        <NavLink to="/"> Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          BP
        </NavLink>
      </li>
    </ul>
  );
};

export default Signin;
