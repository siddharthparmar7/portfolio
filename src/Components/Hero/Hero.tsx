import React from "react";
import ProfileImage from "../../images/Sid.jpg";
import { Parallax } from "react-parallax";
import { useStyles } from "./styles";
import { Typography, Container, Button } from "@material-ui/core";

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
      blur={{ min: 0, max: 0.5 }}
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
          <Button
            size="large"
            href="https://github.com/siddharthparmar7"
            variant="contained"
            color="secondary"
          >
            GITHUB
          </Button>
        </Container>
      </div>
    </Parallax>
  );
};
export default Hero;
