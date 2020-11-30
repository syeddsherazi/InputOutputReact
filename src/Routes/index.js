import React from "react";
import { Switch, Route } from "react-router-dom";
import InputPage from "../Pages/Inputpage";
import OutputPage from "../Pages/Outputpage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={InputPage} />
        <Route path="/output" component={OutputPage} />
      </Switch>
    </>
  );
};

export default Routes;
