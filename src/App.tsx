import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PermitList from "./components/PermitList";
import PermitDetails from "./components/PermitDetails";

const App: React.FC = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <PermitList/>
          </Route>
          <Route exact path="/Details">
          <PermitDetails/>
          </Route>
      </Switch>
    </Router>
  )
}

export default App;
