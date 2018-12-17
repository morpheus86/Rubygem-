import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ProjectDetails extends Component {
  render() {
    const { auth, gems } = this.props;
    const dependencies = gems.dependencies.development
      ? gems.dependencies.development.map((el, idx) => {
          return (
            <li key={idx}>
              <Link to={"/gem" + el.name} className="list-dependencies">
                <strong>{el.name}</strong>" {el.requirements} "
              </Link>
            </li>
          );
        })
      : null;

    if (!auth.uid) return <Redirect to="/signin" />;
    if (gems) {
      return (
        <div className="container section project-ProjectDetails">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{gems.name}</span>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>posted by {gems.authors}</div>
              <div>Downloaded {gems.downloads}</div>
            </div>
            <div className="loverflow">
              <div className="l-colspan--l colspan--l--has-border">
                <div className="gem-intro">
                  <div className="gem_desc">
                    <p>{gems.info}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dependencies">
              <h3 className="dependencies-heading">Dependencies Development</h3>
              <div className="list-dependencies">{dependencies}</div>
            </div>
            <favorite-star active />
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      );
    }
  }
}

const mapState = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const ruby = state.ruby.gems;
  const gem = ruby ? ruby[id] : null;
  return {
    auth: state.firebase.auth,
    gems: gem
  };
};

export default compose(
  connect(mapState),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
