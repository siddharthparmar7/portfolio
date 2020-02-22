import React from "react";
import projectsbg from "../../images/projects.jpg";
import { Parallax } from "react-parallax";
import { useStyles } from "./styles";

const Projects: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Parallax
      bgImageAlt="Sid Parmar"
      strength={300}
      style={{
        height: "400px",
        width: "100%"
      }}
      bgImage={projectsbg}
    ></Parallax>
  );
};
export default Projects;
