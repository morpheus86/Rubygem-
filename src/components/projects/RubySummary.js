import React from "react";
// import RubyGemDetails from "./RubyGemDetails";

const RubySummary = ({ gem }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{gem.name}</span>
        <p>created by {gem.authors}</p>
        <p className="grey-text">{gem.info}</p>
      </div>
    </div>
  );
};

export default RubySummary;
