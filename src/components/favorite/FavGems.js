import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class FavGems extends Component {
  constructor(props) {
    super();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.favorite !== this.props.favorite;
  }
  render() {
    const { auth, favorite } = this.props;
    console.log(favorite);
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="project-list section">
        {favorite ? (
          favorite.map((fav, idx) => {
            return (
              <div key={idx}>
                {fav.favorites.map((el, idx2) => {
                  return (
                    <Link to={"/project/" + idx2} key={idx2}>
                      <div className="card z-depth-0 project-summary">
                        <div className="card-content grey-text text-darken-3">
                          <span className="card-title">
                            {el.favoriteGem.name}
                          </span>
                          <p>created by {el.favoriteGem.authors}</p>
                          <p className="grey-text">{el.favoriteGem.info}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
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
  console.log(state);
  return {
    auth: state.firebase.auth,
    favorite: state.firestore.ordered.users
  };
};

export default compose(
  connect(mapState),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        doc: props.auth.uid,
        subcollections: [{ collection: "favorites" }]
      }
    ];
  })
)(FavGems);
