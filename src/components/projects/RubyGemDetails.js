import React, { Component } from "react";
import { saveGem } from "../../store/actions/saveActionFavGem";
import { connect } from "react-redux";
import Utility from "../../utility/Utility";
import DependencySearch from "../search/DependencySeach";

class RubyGemDetails extends Component {
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.profileFav.some(el => el.name === this.props.gems.name)) {
      alert("Ruby Gem already saved");
    } else {
      alert("Ruby Gem saved to your favorite");
      this.props.addGem(this.props.gems);
      this.props.history.push("/");
    }
  };
  render() {
    const { auth, gems } = this.props;
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
      if (auth.uid) {
        return (
          <div className="container section project-RubyGemDetails">
            <div className="card z-depth-0">
              <div className="card-content">
                <Utility gem={gems} />
                <h3>Dependencies</h3>
                {dependencies}
                <div />
              </div>
              <form onSubmit={this.handleSubmit} className="white">
                <button className="btn pink lighten-1 z-depth-0">
                  Save to favorite
                </button>
              </form>
            </div>
          </div>
        );
      } else {
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
      }
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
    gems: gem,
    profileFav: state.firebase.profile.favorites
  };
};

const mapDispatch = dispatch => {
  return {
    addGem: fav => dispatch(saveGem(fav))
  };
};

export default connect(
  mapState,
  mapDispatch
)(RubyGemDetails);
