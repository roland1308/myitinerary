import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Cities from "./views/Cities";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import LogIn from "./views/LogIn";
import Carousel from "./views/Carousel";
// import Foot from "./components/Foot";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="App">
        <NavBar />
        <div className="main.flex">
        <Logo />
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/cities" component={Cities} />
            <Route path="/login" component={LogIn} />
          </Switch>
        </Router>
        <Carousel />
        {/* <Foot /> */}
        </div>
      </div>
    );
  }
}
export default App;
