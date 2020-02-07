import React from "react";
import Loading from "../components/Loading";

import FadeIn from "react-fade-in";

import { fetchCities } from "../store/actions/cityActions";
import { homeOn } from "../store/actions/appActions"
import { connect } from "react-redux";

class Cities extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCities());
  }

  render() {
    const { error, loading, items } = this.props;
    this.props.dispatch(homeOn());
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (loading) {
      return <Loading />;
    }

    return (
      <div className="cities">
        <FadeIn>
          {items.map((dato, i) => {
            return (
              <div
                key={i}
                className="single"
                style={{ backgroundImage: "url(" + dato.url + ")" }}
              >
                <div>
                  <p className="nomeCitta">{dato.name}</p>
                </div>
              </div>
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
  homeLink: state.app.homeLink
});

export default connect(mapStateToProps)(Cities);