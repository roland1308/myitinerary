import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import ActivityCarousel from "./ActivityCarousel";
import Loading from "../components/Loading";

import { fetchItinerary } from "../store/actions/itineraryActions";
import { fetchActivities } from "../store/actions/activityActions";
import { homeOn, backOn, searchOff } from "../store/actions/appActions";

import { connect } from "react-redux";

class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: []
    };
  }

  // Fetch of all Itineraries with city_id = props.match.params.idcitta
  componentDidMount() {
    //fetch to retrieve the itineraries for that city
    this.props.dispatch(fetchItinerary(this.props.match.params.idcitta));
    this.props.dispatch(homeOn());
    this.props.dispatch(backOn());
    this.props.dispatch(searchOff());
  }

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
    const { errorItin, loadingItin, itineraries, cities } = this.props;
    const { errorAct, loadingAct } = this.props;
    const findId = this.props.match.params.idcitta;
    const citta = cities.find(function(city) {
      return city._id === findId;
    });
    if (errorItin) {
      return <div>Error! {errorItin.message}</div>;
    }
    if (loadingItin) {
      return <Loading />;
    }
    if (errorAct) {
      return <div>Error! {errorAct.message}</div>;
    }
    return (
      <div className="itinerary">
        <div
          className="single"
          style={{ backgroundImage: "url(" + citta.url + ")" }}
        >
          <p className="nomeCitta">{citta.name}</p>
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
              {!this.state.showAll[i] && (
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
  cities: state.cities.items,
  itineraries: state.itineraries.items,
  loadingItin: state.itineraries.loadingItin,
  errorItin: state.itineraries.errorItin,
  loadingAct: state.activities.loadingAct,
  errorAct: state.activities.errorAct
});

export default connect(mapStateToProps)(Itinerary);
