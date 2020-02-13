import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import LandingPage from "./views/LandingPage";
import Cities from "./views/Cities";
import LogIn from "./views/LogIn";
import CreateAccount from "./views/CreateAccount";
import Itinerary from "./views/Itinerary";

import NavBar from "./components/NavBar";
import Foot from "./components/Foot";
import SearchBar from "./components/SearchBar";
import ListUsers from "./components/ListUsers";

class App extends React.Component {
  render() {
    const { homeLink, searchDiv } = this.props;
    return (
      <div className="App">
        <Router>
          <NavBar />
          {searchDiv && <SearchBar />}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/cities" component={Cities} />
            <Route path="/login" component={LogIn} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/itinerary/:idcitta" component={Itinerary} />
            <Route path="/listusers" component={ListUsers} />
          </Switch>
          {homeLink && <Foot />}
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  homeLink: state.app.homeLink,
  searchDiv: state.app.searchDiv
});

export default connect(mapStateToProps)(App);
