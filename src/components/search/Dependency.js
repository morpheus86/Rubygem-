import React, { Component } from "react";
import { saveGem } from "../../store/actions/saveActionFavGem";
import DependencySearch from "../search/DependencySeach";
import { connect } from "react-redux";

class Dependency extends Component {
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.profileFav.some(el => el.name === this.props.gems.name)) {
      alert("gem already saved");
    } else {
      alert("gem saved to your favorite");
      this.props.addGem(this.props.gems);
    }
  };
  render() {
    const { gems, auth } = this.props;
    const dependencies = gems.dependencies.development
      ? gems.dependencies.development.map((el, idx) => {
          return (
            <div key={idx}>
              <DependencySearch el={el} />
            </div>
          );
        })
      : null;

    if (gems) {
      if (auth.uid) {
        return (
          <div>
            <div className="container section project-RubyGemDetails">
              <div className="card z-depth-0">
                <div className="card-content">
                  <div className="l-wrap--b">
                    <h1 className="t-display page__heading">
                      {gems.name}
                      <i className="page__subheading">{gems.version}</i>
                    </h1>
                  </div>
                  <div className="card-action grey lighten-4 grey-text">
                    <div>posted by {gems.authors}</div>
                    <div>Downloaded {gems.downloads}</div>
                  </div>
                  <div className="loverflow">
                    <div className="l-colspan--l colspan--l--has-border">
                      <div className="gemss-intro">
                        <div className="gem_desc">
                          <p>{gems.info}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>Dependencies</h3>
                  {dependencies}
                </div>
                <form onSubmit={this.handleSubmit} className="white">
                  <button className="btn pink lighten-1 z-depth-0">
                    Save to favorite
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="container section project-RubyGemDetails">
              <div className="card z-depth-0">
                <div className="card-content">
                  <div className="l-wrap--b">
                    <h1 className="t-display page__heading">
                      {gems.name}
                      <i className="page__subheading">{gems.version}</i>
                    </h1>
                  </div>
                  <div className="card-action grey lighten-4 grey-text">
                    <div>posted by {gems.authors}</div>
                    <div>Downloaded {gems.downloads}</div>
                  </div>
                  <div className="loverflow">
                    <div className="l-colspan--l colspan--l--has-border">
                      <div className="gemss-intro">
                        <div className="gem_desc">
                          <p>{gems.info}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>Dependencies</h3>
                  {dependencies}
                </div>
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
const mapState = state => {
  return {
    gems: state.ruby.ruby,
    auth: state.firebase.auth,
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
)(Dependency);
