import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

//By doing mapStateToProps, we are just adding these new property (state from the store) to the props object

const mapState = state => {
  console.log(state);

  return {
    projects: state.firestore.ordered.projects
  };
};

export default compose(
  connect(mapState),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
