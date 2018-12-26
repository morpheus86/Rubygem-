import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import DeleteFav from "./DeleteFav";
import FavoriteSummary from "./FavoriteSummary";

class FavGems extends Component {
  constructor(props) {
    super();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.favorite !== this.props.favorite;
  }
  render() {
    const { auth, favorite } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container section project-RubyGemDetails">
        <h1>Favorite page</h1>
        {favorite ? (
          favorite.map((fav, idx) => {
            return (
              <div
                className="container section project-RubyGemDetails"
                key={idx}
              >
                <div className="card z-depth-0 project-summary">
                  <Link to={"/favoritedetails/" + idx}>
                    {/* <div className="card-content grey-text text-darken-3">
                      <span className="card-title">{fav.name}</span>
                      <p>created by {fav.authors}</p>
                      <p className="grey-text">{fav.info}</p>
                    </div> */}
                    <FavoriteSummary fav={fav} />
                  </Link>
                  <DeleteFav fav={fav} />
                </div>

                <div />
              </div>
            );
          })
        ) : (
          <div className="container center">
            <p>Loading project...</p>
          </div>
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    auth: state.firebase.auth,
    favorite: state.firebase.profile.favorites
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
)(FavGems);
