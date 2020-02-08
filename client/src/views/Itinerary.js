import React from "react";

import Avatar from "@material-ui/core/Avatar";

import Loading from "../components/Loading";

import { fetchItinerary } from "../store/actions/itineraryActions";
import { fetchOneCityId } from "../store/actions/cityActions";
import { homeOn, backOn, searchOff } from "../store/actions/appActions";

import { connect } from "react-redux";

class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // Fetch of all Itineraries with city_id = props.match.params.idcitta
  componentDidMount() {
      //fetch to retrieve city image url
      this.props.dispatch(
          fetchOneCityId(this.props.match.params.idcitta.substring(1))
          );
          //fetch to retrieve the itineraries
          this.props.dispatch(fetchItinerary(this.props.match.params.idcitta));
          this.props.dispatch(homeOn());
          this.props.dispatch(backOn());
          this.props.dispatch(searchOff());
  }

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
              <h2>Activities</h2>
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
