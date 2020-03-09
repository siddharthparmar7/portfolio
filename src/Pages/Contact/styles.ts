import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "85vh"
  }
}));
