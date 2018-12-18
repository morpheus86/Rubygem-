import React, { Component } from "react";
import { connect } from "react-redux";
import { saveGem } from "../../store/actions/saveActionFavGem";
import { Redirect } from "react-router-dom";

class SaveFav extends Component {
  state = {
    isToggleOn: true
  };
  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addGem(this.props.gems);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="white">
        <button
          className="btn pink lighten-1 z-depth-0"
          onClick={this.handleClick}
        >
          {this.state.isToggleOn ? "Save as favorite" : "REMOVE as favorite"}
        </button>
      </form>
    );
  }
}

const mapState = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(state);
  // console.log(ownProps);
  // console.log(state);
  const ruby = state.ruby.gems;
  const gem = ruby ? ruby[id] : null;
  console.log("GEM", gem);
  return {
    rubyGem: gem
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
