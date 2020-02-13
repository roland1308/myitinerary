import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";

class ActivityCarousel extends React.Component {

  handleComment(e) {
    console.log(e.key)
  }

  render() {
    const { activities } = this.props;
    const settings = {
      dots: true,
      className: "center innerSlide",
      centerMode: false,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 2,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500
    };

    return (
      <div>
        <Slider {...settings}>
          {activities.map((activity, i) => {
            return (
              <div key={i}>
                <Link
                  className="linkNoDecoration"
                  to={"/activity/:" + activity._id}
                >
                    <div
                      className="activity"
                      style={{ backgroundImage: "url(" + activity.photo + ")" }}
                    >
                      <p className="nomeActivity">{activity.name}</p>
                    </div>
                </Link>
              </div>
            );
          })}
        </Slider>
        <div className="searchCity">
          <TextField
            id="standard-search"
            label="Comment this Itinerary"
            type="search"
            variant="outlined"
            // autoFocus={true}
            fullWidth
            onKeyPress={this.handleComment}
          />
        </div>
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
