import React from "react";

const Utility = props => {
  return (
    <div className="container section project-RubyGemDetails">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="l-wrap--b">
            <h1 className="t-display page__heading">
              {props.gem.name}
              <i className="page__subheading">{props.gem.version}</i>
            </h1>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>posted by {props.gem.authors}</div>
            <div>Downloaded {props.gem.downloads}</div>
          </div>
          <div className="loverflow">
            <div className="l-colspan--l colspan--l--has-border">
              <div className="props.gems-intro">
                <div className="gem_desc">
                  <p>{props.gem.info}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utility;
