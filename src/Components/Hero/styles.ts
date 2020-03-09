import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "600px",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background:
      "linear-gradient(to right bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
  },
  title: {
    color: "white",
    textTransform: "uppercase",
    fontSize: "3em",
    fontWeight: 700,
    [theme.breakpoints.up("sm")]: {
      fontSize: "5em",
      fontWeight: 700
    }
  },
  info: {
    fontWeight: 400,
    fontSize: "1em",
    color: "white",
    opacity: 0.9,
    marginTop: 20,
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2em"
    }
  },
  actionButtons: {
    margin: 30,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "max-content"
    },
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      flexDirection: "row",
      alignSelf: "center",
      justifyContent: "center"
    }
  },
  icons: {
    marginRight: 5,
    [theme.breakpoints.between("xs", "sm")]: {
      paddingLeft: 10
    }
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
