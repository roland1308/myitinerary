import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import ActivityCarousel from "./ActivityCarousel";
import Loading from "../components/Loading";

import { fetchOneCityId } from "../store/actions/cityActions";
import { fetchItinerary } from "../store/actions/itineraryActions";
import { fetchActivities } from "../store/actions/activityActions";
import { homeOn, backOn, searchOff } from "../store/actions/appActions";
import { checkToken } from "../store/actions/userActions";

import { connect } from "react-redux";

class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: []
    };
  }

  componentDidMount = () => {
    const token = window.localStorage.token;
    this.props.dispatch(checkToken(token));
    let fetchId = "";
    if (this.props.match.params.idcitta) {
      fetchId = this.props.match.params.idcitta;
      window.localStorage.setItem("idcitta", fetchId);
    } else if (window.localStorage.idcitta) {
      fetchId = window.localStorage.idcitta;
    } else {
      this.props.history.push("/");
    };
    this.props.dispatch(fetchOneCityId(fetchId));
    this.props.dispatch(fetchItinerary(fetchId));
    this.props.dispatch(homeOn());
    this.props.dispatch(backOn());
    this.props.dispatch(searchOff());
  };

  handleActivity = (itinerario, i) => {
    this.props.dispatch(fetchActivities(itinerario));
    let show = [];
    show[i] = true;
    this.setState({
      showAll: show
    });
  };

  handleActivityClose = () => {
    this.setState({
      showAll: []
    });
  };

  render() {
    const { errorItin, loadingItin, itineraries, selectedCity } = this.props;
    const { errorAct, loadingAct } = this.props;
    const { errorCit, loadingCit } = this.props;
    const { loadingUser } = this.props;
    const { loggedIn } = this.props;
    if (errorItin || errorAct || errorCit) {
      return <div>Error!
        {errorItin} , {errorAct} , {errorCit}
      </div>;
    }
    if (loadingItin || loadingAct || loadingCit || loadingUser) {
      return <Loading />;
    }
    return (
      <div className="itinerary">
        <div
          className="single"
          style={{ backgroundImage: "url(" + selectedCity.url + ")" }}
        >
          <p className="nomeCitta">{selectedCity.name}</p>
        </div>
        <h2 className="padding17">Available MYtineraries</h2>
        {itineraries.map((itinerary, i) => {
          return (
            <div key={i} className="itineraryContainer">
              <div className="row">
                <div className="col-sm-4 avatar">
                  <Avatar alt={itinerary.username} src={itinerary.photo} />
                  <div>{itinerary.username}</div>
                </div>
                <div className="col-sm-8 avatar">
                  <div>{itinerary.name}</div>
                  <div className="row">
                    <div className="col-sm">Rate: {itinerary.rating}</div>
                    <div className="col-sm">Hours:{itinerary.duration}</div>
                    <div className="col-sm">Price: {itinerary.price}</div>
                  </div>
                  <div>{itinerary.hashtags}</div>
                </div>
              </div>
              {!this.state.showAll[i] && loggedIn && (
                <Button
                  className="openingButton"
                  variant="contained"
                  size="large"
                  onClick={() => this.handleActivity(itinerary._id, i)}
                >
                  View all activities
                </Button>
              )}
              {this.state.showAll[i] && !loadingAct && (
                <div>
                  <ActivityCarousel />
                  <Button
                    className="closingButton"
                    variant="contained"
                    size="large"
                    onClick={this.handleActivityClose}
                  >
                    Close
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedCity: state.cities.selectedCity,
  itineraries: state.itineraries.items,
  loadingItin: state.itineraries.loadingItin,
  errorItin: state.itineraries.errorItin,
  loadingAct: state.activities.loadingAct,
  errorAct: state.activities.errorAct,
  loadingCit: state.cities.loading,
  errorCit: state.cities.error,
  errorlogging: state.users.errorlogging,
  loadingUser: state.users.loading,
  loggedIn: state.users.loggedIn
});

export default connect(mapStateToProps)(Itinerary);
