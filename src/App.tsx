import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Loader from "./Components/Loader";

const AppRoutes = lazy(() => import("./AppRoutes/index"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
