import React from "react";
import ProfileImage from "../../images/Sid.jpg";
import { Parallax } from "react-parallax";
import { useStyles } from "./styles";
import { Typography, Container, Button, Box } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons/";

const Hero: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Parallax
      bgImageAlt="Sid Parmar"
      strength={300}
      bgImageStyle={{
        top: "10%"
      }}
      bgImage={ProfileImage}
    >
      <div className={classes.root}>
        <Container maxWidth="md" className={classes.insideStyles}>
          <Typography align="center" variant="h1" className={classes.title}>
            I AM SID PARMAR
          </Typography>
          <Typography variant="body1" className={classes.info}>
            I am an <strong>App Dev Instructor </strong>
            at RED Academy, Vancouver. I graduated from
            <strong> North Island College </strong>
            with the
            <strong>Web and Mobile Application Development Diploma </strong>
            and I also have a <strong> Computer Science Degree </strong>.
          </Typography>
          <Box className={classes.actionButtons}>
            <Button
              className={classes.button}
              size="large"
              href="https://github.com/siddharthparmar7"
              variant="contained"
              color="secondary"
            >
              <GitHub /> Projects
            </Button>
            <Button
              className={classes.button}
              color="secondary"
              size="large"
              href="https://www.linkedin.com/in/siddharth-parmar-a901a075/"
              variant="contained"
            >
              <LinkedIn /> LinkedIn
            </Button>
          </Box>
        </Container>
      </div>
    </Parallax>
  );
};
export default Hero;
