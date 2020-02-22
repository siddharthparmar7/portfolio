import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    opacity: 0.6
  },
  container: {
    padding: 50
  },
  grid: {
    flexGrow: 1,
    marginTop: 20
  },
  projects: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  logos: {
    height: "auto",
    width: "40%"
  }
}));
