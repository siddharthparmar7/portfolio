import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    // opacity: 0.9
  },
  container: {
    padding: 50
  },
  grid: {
    marginTop: 20
  },
  gridContainer: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between"
    }
  },
  projects: {
    flexDirection: "column",
    flexBasis: "30%",
    textAlign: "center",
    paddingTop: "10%",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 0
    }
  },
  logos: {
    height: "auto",
    width: "20%"
  },
  details: {
    marginTop: 20
  }
}));
