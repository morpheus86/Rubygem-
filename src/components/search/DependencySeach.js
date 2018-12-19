import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchDependencies } from "../../store/actions/rubyActions";

class DependencySeach extends Component {
  dependencyClick = e => {
    e.preventDefault();
    this.props.dependency(this.props.el.name);
  };

  render() {
    const { el } = this.props;
    return (
      <li onClick={e => this.dependencyClick(e)}>
        <Link to={"/dependency/" + el.name} className="list-dependencies">
          <strong id={el.name}>{el.name}</strong>"{el.requirements}"
        </Link>
      </li>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    dependency: name => dispatch(fetchDependencies(name))
  };
};

export default connect(
  null,
  mapDispatch
)(DependencySeach);
