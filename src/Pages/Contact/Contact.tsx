import React from "react";
import {
  Container,
  Button,
  Typography,
  InputLabel,
  TextField
} from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { useStyles } from "./styles";

const questions = [
  {
    id: 0,
    question: "What should I call you?",
    answered: false
  },
  {
    id: 1,
    question: "What is your email?",
    answered: false
  },
  {
    id: 2,
    question: "What would you like to talk about with Sid?",
    answered: false
  }
];

const Contact: React.FunctionComponent<{}> = props => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {/* <h1>Get in touch</h1>
      <Typography>Interested in knowing more about me?</Typography>
      <Typography>Tell me how can I reach you and let's connect!</Typography>
      <Button onClick={() => {}}>Connect</Button> */}
      <Form
        onSubmit={values => {
          console.log(values);
        }}
        render={({ handleSubmit }) => {
          return (
            <>
              <Field
                name=""
                render={({ input, meta }) => (
                  <>
                    <InputLabel htmlFor="">With a start adornment</InputLabel>
                    <TextField id="" placeholder="" />
                  </>
                )}
              />
            </>
          );
        }}
      />
    </Container>
  );
};

export default Contact;
