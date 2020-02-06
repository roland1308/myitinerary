import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Cities from "./views/Cities";
import NavBar from "./components/NavBar";
import LogIn from "./views/LogIn";
import Foot from "./components/Foot";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    fetch("/cities/all")
    .then(response => response.json())
    .then(result => 
      this.setState({
        data: result
      }))
    .catch(e => console.log(e));
  }

  render() {
    return (
        <div className="App">
          <NavBar />
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/cities"
                render={props => (
                  <Cities
                    data={this.state.data}
                    {...props}
                  />
              )}/>
              <Route path="/login" component={LogIn} />
            </Switch>
          </Router>
          <Foot />
        </div>
    );
  }
}
export default App;
