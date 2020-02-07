import React from "react";
import start from "../images/circled-right-2.png";
import Carousel from "../views/Carousel";
import Logo from "../components/Logo";

import { Link } from "react-router-dom";
import { homeOff } from "../store/actions/appActions";
import { connect } from "react-redux";

class LandingPage extends React.Component {
  render() {
    this.props.dispatch(homeOff());

    return (
      <div className="landing">
        <Logo />
        <div>
          <h2>
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </h2>
        </div>
        <Link to="./cities" className="linkNoDecoration">
          <div>
            <h1>Start Browsing</h1>
          </div>
          <div>
            <img className="button" src={start} alt="Start Browsing" />
          </div>
        </Link>
        <Carousel />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  homeLink: state.app.homeLink
});

export default connect(mapStateToProps)(LandingPage);
