import React from "react";
import Slider from "react-slick";

import { connect } from "react-redux";

class ActivityCarousel extends React.Component {
  render() {
    const { activities } = this.props;
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500
    };
    return (
      <div>
        <Slider {...settings}>
          {activities.map((activity, i) => {
            return (
              <div className="activity" key={i} style={{ backgroundImage: "url(" + activity.photo + ") !important" }}>
                <p>{activity.photo}</p>
              </div>
            );
          })}
          {activities.map((activity, i) => {
            return (
              <div className="activity" key={i} style={{ backgroundImage: "url(" + activity.photo + ")" }}>
                <p>{activity.photo}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activities.items,
  loading: state.activities.loading,
  error: state.activities.error
});

export default connect(mapStateToProps)(ActivityCarousel);
