import React from "react";
import projectsbg from "../../images/projects.jpg";
import { Parallax } from "react-parallax";
import { useStyles } from "./styles";
import { Container, Typography } from "@material-ui/core";
import {
  GitHub,
  ImportantDevicesRounded,
  LibraryBooksRounded
} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";

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
            <Grid className={classes.gridContainer}>
              <Grid item className={classes.projects}>
                <ImportantDevicesRounded className={classes.logos} />
                <Typography>I am a full stack developer.</Typography>
              </Grid>
              <Grid item className={classes.projects}>
                <LibraryBooksRounded className={classes.logos} />
                <Typography>I am a full stack developer.</Typography>
              </Grid>
              <Grid item className={classes.projects}>
                <GitHub className={classes.logos} />
                <Typography>I am a full stack developer.</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Parallax>
  );
};
export default Projects;
