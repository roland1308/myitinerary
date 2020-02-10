import React from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

import FadeIn from "react-fade-in";

import { fetchCities } from "../store/actions/cityActions";
import { homeOn, backOff, searchOn } from "../store/actions/appActions";

import { connect } from "react-redux";

class Cities extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCities());
    this.props.dispatch(homeOn());
    this.props.dispatch(backOff());
    this.props.dispatch(searchOn());
  }

  render() {
    const { error, loading, items, campoCerca } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (loading) {
      return <Loading />;
    }
    let nuovaLista = items;
    if (campoCerca !== "") {
      nuovaLista = items.filter(dato => {
        return dato.name.toLowerCase().includes(campoCerca);
      });
    }
    // else {
    //   nuovaLista = items;
    // }
    return (
      <div className="cities">
        <FadeIn>
          {nuovaLista.map((dato, i) => {
            return (
              <Link key={i} to={"/itinerary/:" + dato._id}>
              {/* <Link key={i} to={"/additinerary/:" + dato._id}> */}

                <div
                  className="single"
                  style={{ backgroundImage: "url(" + dato.url + ")" }}
                >
                  <p className="nomeCitta">{dato.name}</p>
                </div>
              </Link>
            );
          })}
        </FadeIn>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cities.items,
  loading: state.cities.loading,
  error: state.cities.error,
  campoCerca: state.app.campoCerca,
  homeLink: state.app.homeLink,
  searchDiv: state.app.searchDiv
});

export default connect(mapStateToProps)(Cities);
