import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Utility from "../../utility/Utility";
import { Redirect } from "react-router-dom";
import DependencySearch from "../search/DependencySeach";

class FavoriteDetails extends Component {
  render() {
    const { auth, gems } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    const dependencies = gems.dependencies.development ? (
      gems.dependencies.development.map((el, idx) => {
        return (
          <div key={idx}>
            <DependencySearch el={el} />
          </div>
        );
      })
    ) : (
      <div>Loading ruby...</div>
    );

    if (gems) {
      return (
        <div className="container section project-RubyGemDetails">
          <div className="card z-depth-0">
            <div className="card-content">
              <Utility gem={gems} />
              <h3>Dependencies</h3>
              {dependencies}
              <div />
            </div>
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
  const ruby = state.firebase.profile.favorites;
  const favGem = ruby ? ruby[id] : null;
  console.log(state);
  return {
    auth: state.firebase.auth,
    gems: favGem,
    profileFav: state.firebase.profile.favorites
  };
};

export default compose(
  connect(mapState),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        doc: props.auth.uid
      }
    ];
  })
)(FavoriteDetails);
