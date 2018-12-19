// import React, { Component } from "react";
// import createProject from "../../store/actions/projectActions";
// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
// class CreateProject extends Component {
//   state = {
//     title: "",
//     content: ""
//   };

//   handleChange = e => {
//     this.setState({
//       //grab whatever is type in the input
//       [e.target.id]: e.target.value
//     });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     //whatever is submited
//     this.props.createProject(this.state);
//     //this.state is the project we are trying to create
//   };
//   render() {
//     const { auth } = this.props;
//     if (!auth.uid) return <Redirect to="/signin" />;
//     return (
//       <div className="container">
//         <form onSubmit={this.handleSubmit} className="white">
//           <h5 className="grey-text tex-darken-3">Create new project</h5>
//           <div className="input-field">
//             <label htmlFor="title">Title</label>
//             <input type="text" id="title" onChange={this.handleChange} />
//           </div>
//           <div className="input-field">
//             <label htmlFor="content">Project Content</label>
//             <textarea
//               id="content"
//               onChange={this.handleChange}
//               className="materialize-textarea"
//             />
//           </div>
//           <div className="input-field">
//             <button className="btn pink lighten-1 z-depth-0">Create</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// const mapState = state => {
//   return {
//     auth: state.firebase.auth
//   };
// };

// const mapDispatch = dispatch => {
//   return {
//     createProject: project => dispatch(createProject(project))
//   };
// };
// //this mapdispatch will retur the createProject function in our action creator where we will make some kind of async call to the database we want to access.
// export default connect(
//   mapState,
//   mapDispatch
// )(CreateProject);
