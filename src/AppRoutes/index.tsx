import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Loader from "../Components/Loader";

const Home = lazy(() => import("../Pages/Home"));
const Contact = lazy(() => import("../Pages/Contact"));

const Routes: React.FunctionComponent<{}> = () => (
  <Suspense fallback={<Loader />}>
    <Router>
      <Switch>
        <Route exact path="/portfolio" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Redirect from="*" to="/portfolio" />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
