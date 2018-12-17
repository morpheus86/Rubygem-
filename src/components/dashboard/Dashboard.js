import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import SearchBar from "../search/SearchBar";

class Dashboard extends Component {
  render() {
    const { projects, auth, ruby } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList ruby={ruby} />
          </div>
          <div className="col s12 m5 offset-m1">
            <SearchBar />
          </div>
        </div>
      </div>
    );
  }
}

//By doing mapStateToProps, we are just adding these new property (state from the store) to the props object

const mapState = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    ruby: state.ruby.gems
  };
};

export default compose(
  connect(mapState),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
