import React, { Component } from "react";
import { connect } from "react-redux";
import { saveGem } from "../../store/actions/saveActionFavGem";

class SaveFav extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.addGem(this.props.gem);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="white">
        <button className="btn pink lighten-1 z-depth-0">
          Save to Favorite
        </button>
      </form>
    );
  }
}

const mapState = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const ruby = state.ruby.gems;
  const gem = ruby ? ruby[id] : null;
  return {
    gem
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
)(SaveFav);
