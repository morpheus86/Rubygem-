import React from "react";
import { connect } from "react-redux";

const Dependency = props => {
  console.log(props);
  const { gems } = props;
  if (gems) {
    return (
      <div className="container section project-RubyGemDetails">
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
            <div className="list-dependencies">gem</div>
          </div>
        </div>
        {/* <form onSubmit={this.handleSubmit} className="white">
          <button className="btn pink lighten-1 z-depth-0">
            Save to favorite
          </button>
        </form> */}
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapState = state => {
  console.log(state);
  return {
    gems: state.ruby.ruby
  };
};

export default connect(mapState)(Dependency);
