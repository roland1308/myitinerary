import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Cities from "./views/Cities";
import NavBar from "./components/NavBar";
import LogIn from "./views/LogIn";
// import AddItinerary from "./views/AddItinerary";
import Itinerary from "./views/Itinerary";
import Foot from "./components/Foot";
import SearchBar from "./components/SearchBar";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { homeLink, searchDiv } = this.props;
    return (
      <div className="App">
        <NavBar />
        {searchDiv && <SearchBar />}
        {/* <div className="principale"> */}
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/cities" component={Cities} />
              <Route path="/login" component={LogIn} />
              <Route path="/itinerary/:idcitta" component={Itinerary} />
              {/* <Route path="/additinerary/:idcitta" component={AddItinerary} /> */}
            </Switch>
          </Router>
          {homeLink && <Foot />}
        {/* </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  homeLink: state.app.homeLink,
  searchDiv: state.app.searchDiv
});

export default connect(mapStateToProps)(App);
