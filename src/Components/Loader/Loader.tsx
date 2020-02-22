import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./styles";

const Loader: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loader;
