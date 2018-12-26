import React from "react";

const FavoriteSummary = ({ fav }) => {
  return (
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{fav.name}</span>
      <p>created by {fav.author}</p>
      <p className="grey-text">{fav.info}</p>
    </div>
  );
};

export default FavoriteSummary;
