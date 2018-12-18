import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRuby } from "../../store/actions/rubyActions";

class SearchBar extends Component {
  state = {
    input: ""
  };
  handleChange = e => {
    this.setState({
      //grab whatever is type in the input
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.rubyFetch(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text tex-darken-3">Search for Ruby Gem</h5>
          <div className="input-field">
            <label htmlFor="input">search</label>
            <input type="text" id="input" onChange={this.handleChange} />
          </div>
          <button className="btn pink lighten-1 z-depth-0">Search</button>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  console.log(state);
  return {
    rubyGems: state.ruby.gems
  };
};
const mapDispatch = dispatch => {
  return {
    rubyFetch: term => dispatch(fetchRuby(term))
  };
};
export default connect(
  mapState,
  mapDispatch
)(SearchBar);
