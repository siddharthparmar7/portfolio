import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    height: "550px",
    // opacity: 0.6,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    background:
      "linear-gradient(to right bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
  },
  insideStyles: {
    // maxWidth: "80%"
  },
  title: {
    color: "white",
    textTransform: "uppercase",
    fontSize: "5em",
    fontWeight: 700
  },
  info: {
    fontWeight: 400,
    fontSize: "1.2em",
    color: "white",
    opacity: 0.9
  },
  actionButtons: {
    margin: 30,
    display: "flex",
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  },
  button: {
    margin: 20
  }
}));
