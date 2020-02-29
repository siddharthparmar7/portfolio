import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 40
    },
    root: {
      flexGrow: 1
    },
    card: {
      height: 380
    },
    image: {
      height: 140
    },
    sectionTitle: {
      width: 55,
      height: 4,
      margin: "8px auto 20px",
      display: "block",
      backgroundColor: "#ff3366"
    },
    content: {
      height: 150,
      overflow: "hidden"
    }
  })
);
