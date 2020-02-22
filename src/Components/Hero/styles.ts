import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    height: "550px",

    opacity: 0.6,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    background: "linear-gradient(to right bottom, #000, #000)"
  },
  insideStyles: {
    // maxWidth: "80%"
  },
  title: {
    color: "white",
    textTransform: "uppercase",
    fontSize: "5em",
    fontWeight: 900
  },
  info: {
    fontWeight: 400,
    fontSize: "1.2em",
    color: "white",
    opacity: 0.9
  }
}));
