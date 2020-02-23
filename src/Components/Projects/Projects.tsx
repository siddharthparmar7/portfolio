import React from "react";
import projectsbg from "../../images/projects.jpg";
import { Parallax } from "react-parallax";
import { useStyles } from "./styles";
import { Container, Typography, Box, Grid } from "@material-ui/core";
import {
  GitHub,
  ImportantDevicesRounded,
  LibraryBooksRounded
} from "@material-ui/icons";

const Projects: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Parallax
      bgImageAlt="Projects"
      className={classes.root}
      bgImage={projectsbg}
    >
      <Container className={classes.container}>
        <Grid container className={classes.grid} spacing={8}>
          <Grid item xs={12}>
            <Grid className={classes.gridContainer}>
              <Grid item className={classes.projects}>
                <ImportantDevicesRounded className={classes.logos} />
                <Typography variant="h4">Experience</Typography>
                <Box className={classes.details}>
                  <Typography variant="body1">
                    I am a full stack developer with professional experience in
                    React, React Native, NodeJs, Express, Redux, GraphQL,
                    DevOps, Jest, REST API, etc.
                  </Typography>
                </Box>
              </Grid>
              <Grid item className={classes.projects}>
                <LibraryBooksRounded className={classes.logos} />
                <Typography variant="h4">Education</Typography>
                <Box className={classes.details}>
                  <Typography variant="body1">
                    Web And Mobile Application Development Diploma
                  </Typography>
                  <Typography variant="body1">
                    Bachelor in Computer Science
                  </Typography>
                  <Typography variant="body1">
                    Machine Learning Beginner
                  </Typography>
                  <Typography variant="body1">
                    I recently leanred to solve Rubik's Cube!
                  </Typography>
                </Box>
              </Grid>
              <Grid item className={classes.projects}>
                <GitHub className={classes.logos} />
                <Typography variant="h4">GitHub</Typography>
                <Box className={classes.details}>
                  <Typography variant="body1">
                    Managed more than 10 React Native projects.
                  </Typography>
                  <Typography variant="body1">
                    Actively managing and maintaining team projects.
                  </Typography>
                  <Typography variant="body1">
                    Actively working on personal projects and learning new tech.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Parallax>
  );
};
export default Projects;
