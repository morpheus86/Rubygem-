import React, { Component } from "react";
import { saveGem } from "../../store/actions/saveActionFavGem";
import { connect } from "react-redux";

class Dependency extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.addGem(this.props.gems);
  };
  render() {
    const { gems } = this.props;

    if (gems) {
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
              </div>
            </div>
          </div>
          <form onSubmit={this.handleSubmit} className="white">
            <button className="btn pink lighten-1 z-depth-0">
              Save to favorite
            </button>
          </form>
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
const mapState = state => {
  console.log(state);
  return {
    gems: state.ruby.ruby
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
