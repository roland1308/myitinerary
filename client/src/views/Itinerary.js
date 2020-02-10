import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import ActivityCarousel from "./ActivityCarousel";
import Loading from "../components/Loading";

import { fetchItinerary } from "../store/actions/itineraryActions";
import { fetchActivities } from "../store/actions/activityActions";
import { fetchOneCityId } from "../store/actions/cityActions";
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
    //fetch to retrieve city image url
    this.props.dispatch(
      fetchOneCityId(this.props.match.params.idcitta.substring(1))
    );
    //fetch to retrieve the itineraries for that city
    this.props.dispatch(fetchItinerary(this.props.match.params.idcitta));
    this.props.dispatch(homeOn());
    this.props.dispatch(backOn());
    this.props.dispatch(searchOff());
  }

  handleActivity = (itinerario, i) => {
    console.log(itinerario);
    this.props.dispatch(fetchActivities(itinerario));
    console.log(this.props)
    let show = [];
    show[i] = true;
    this.setState({
      showAll: show
    });
  };

  render() {
    const { error, loading, itineraries, city } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (loading) {
      return <Loading />;
    }

    return (
      <div className="itinerary">
        <div
          className="single"
          style={{ backgroundImage: "url(" + city.url + ")" }}
        >
          <p className="nomeCitta">{city.name}</p>
        </div>
        <h2 className="padding17">Available MYtineraries</h2>
        {itineraries.map((itinerary, i) => {
          return (
            <div>
            <div key={i} className="row">
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
                  className="activitiesButton"
                  variant="contained"
                  size="large"
                  onClick={() => this.handleActivity(itinerary._id, i)}
                >
                  View all activities
                </Button>
              )}
              {this.state.showAll[i] && <ActivityCarousel />}
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  city: state.cities.items,
  itineraries: state.itineraries.items,
  loading: state.itineraries.loading,
  error: state.itineraries.error
});

export default connect(mapStateToProps)(Itinerary);
