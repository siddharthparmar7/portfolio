import React from "react";
import projectsbg from "../../images/projects.jpg";
import reactimg from "../../images/react.png";
import { Parallax } from "react-parallax";
import { useStyles } from "./styles";
import { Container, Typography, Box } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const Projects: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Parallax
      bgImageAlt="Projects"
      className={classes.root}
      bgImage={projectsbg}
    >
      <Container className={classes.container}>
        <Typography align="center" variant="h2">
          PORTFOLIO
        </Typography>
        <Typography align="center" variant="subtitle1">
          Here is glimpse of personal and professional projects.
        </Typography>
        <Grid container className={classes.grid} spacing={8}>
          <Grid item xs={12}>
            <Grid container justify="space-evenly">
              <Grid item className={classes.projects}>
                <GitHub className={classes.logos} />
                <Typography>GitHub Project and contributions</Typography>
              </Grid>
              <Grid item className={classes.projects}>
                <GitHub className={classes.logos} />
                <Typography>GitHub Project and contributions</Typography>
              </Grid>
              <Grid item className={classes.projects}>
                <GitHub className={classes.logos} />
                <Typography>GitHub Project and contributions</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Parallax>
  );
};
export default Projects;
