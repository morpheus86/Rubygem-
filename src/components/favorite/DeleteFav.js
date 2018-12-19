import React, { Component } from "react";
import { connect } from "react-redux";
import { removeGem } from "../../store/actions/saveActionFavGem";

class DeleteFav extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.delete(this.props.fav);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="white">
        <button className="btn pink lighten-1 z-depth-0">
          Remove from favorite
        </button>
      </form>
    );
  }
}

const mapState = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatch = dispatch => {
  return {
    delete: gem => dispatch(removeGem(gem))
  };
};

export default connect(
  mapState,
  mapDispatch
)(DeleteFav);
