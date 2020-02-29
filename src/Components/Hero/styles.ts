import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "550px",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    background:
      "linear-gradient(to right bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
  },
  title: {
    color: "white",
    textTransform: "uppercase",
    fontSize: "3.5em",
    fontWeight: 700,
    [theme.breakpoints.up("sm")]: {
      fontSize: "5em",
      fontWeight: 700
    }
  },
  info: {
    fontWeight: 400,
    fontSize: "1.2em",
    color: "white",
    opacity: 0.9,
    marginTop: 20
  },
  actionButtons: {
    margin: 30,
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignSelf: "center",
      justifyContent: "center"
    }
  },
  icons: {
    marginRight: 5
  },
  button: {
    margin: 10,
    justifyContent: "flex-start",
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      alignItems: "center"
    }
  }
}));
