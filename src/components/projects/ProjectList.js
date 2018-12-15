import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProjectList = ({ projects, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} />
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
