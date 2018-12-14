import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-ProjectDetails">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">project title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            reiciendis! Quis, ab voluptates cupiditate optio beatae, tenetur
            obcaecati non enim porro est perspiciatis illum recusandae omnis
            animi accusamus dolore! Nulla.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>posted by</div>
          <div>5 November, 12PM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
