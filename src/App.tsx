import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Loader from "./Components/Loader";

const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
