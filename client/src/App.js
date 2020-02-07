import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Cities from "./views/Cities";
import NavBar from "./components/NavBar";
import LogIn from "./views/LogIn";
import Foot from "./components/Foot";
import { connect } from "react-redux";

class App extends React.Component {

  render() {
    const { homeLink } = this.props;
    return (
        <div className="App">
          <NavBar />
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/cities" component={Cities} />
              <Route path="/login" component={LogIn} />
            </Switch>
          </Router>
          {homeLink && <Foot />}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  homeLink: state.app.homeLink
});

export default connect(mapStateToProps)(App);