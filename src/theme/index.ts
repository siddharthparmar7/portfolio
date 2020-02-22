import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

let theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: {
      main: "#ff4081"
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f"
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c"
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2"
    }
  }
});

theme = responsiveFontSizes(theme, { breakpoints: ["sm", "md", "lg"] });

export default theme;
