import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProjectList = ({ auth, ruby }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="project-list section">
      {ruby &&
        ruby.map((gem, idx) => {
          return (
            <Link to={"/project/" + idx} key={idx}>
              <ProjectSummary gem={gem} />
            </Link>
          );
        })}
    </div>
  );
};

const mapState = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapState)(ProjectList);
