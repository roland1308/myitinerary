import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Cities from "./views/Cities";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ LandingPage } />
            <Route path="/cities" component={ Cities } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
