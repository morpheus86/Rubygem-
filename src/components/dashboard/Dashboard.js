import React, { Component } from "react";
import RubyList from "../projects/RubyList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import SearchBar from "../search/SearchBar";

class Dashboard extends Component {
  render() {
    const { auth, ruby } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col s12 m6">
            <RubyList ruby={ruby} />
          </div>
          <div className="col s12 m5 offset-m1">
            <SearchBar />
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    auth: state.firebase.auth,
    ruby: state.ruby.gems
  };
};

export default compose(
  connect(mapState),
  firestoreConnect([{ collection: "users" }])
)(Dashboard);
