import React from "react";
import start from "../images/circled-right-2.png";
import Carousel from "../views/Carousel";
import Logo from "../components/Logo";
import Loading from "../components/Loading";

import { Link } from "react-router-dom";

import {
  homeOff,
  searchOff,
  logInOn,
  logInOff
} from "../store/actions/appActions";
import { checkToken } from "../store/actions/userActions";

import { connect } from "react-redux";

class LandingPage extends React.Component {

  componentDidMount = () => {
    const token = window.localStorage.token;
    this.props.dispatch(checkToken(token));
  };

  render() {
    this.props.dispatch(homeOff());
    this.props.dispatch(searchOff());

    const { errorlogging, loading } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (!errorlogging) {
      this.props.dispatch(logInOn());
    } else {
      this.props.dispatch(logInOff());
    }

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
            <h1 className="linkNoDecoration">Start Browsing</h1>
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
  errorlogging: state.users.errorlogging,
  loading: state.users.loading
});

export default connect(mapStateToProps)(LandingPage);
