import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import HomeScreen from "./screens/HomeScreen";
import NotBuiltScreen from "./screens/NotBuiltScreen";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/category/:category' component={HomeScreen} />
        <Route path='/source/:source' component={HomeScreen} />
        <Route path='/search/:term' component={HomeScreen} />
        <Route component={NotBuiltScreen} />
      </Switch>
    </Fragment>
  );
}

export default App;
