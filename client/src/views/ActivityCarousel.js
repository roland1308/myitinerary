import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";

import { IconContext } from "react-icons";
import { MdFavorite } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";

class ActivityCarousel extends React.Component {
  handleComment(e) {
    console.log(e.key);
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
      <div className="itineraryInside">
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
        <div className="commentItinerary row">
          <div className="col-sm-10">
            <TextField
              multiline
              rowsMax="4"
              id="standard-search"
              label="Comment this Itinerary"
              type="search"
              variant="outlined"
              // autoFocus={true}
              fullWidth
              onKeyPress={this.handleComment}
            />
          </div>
          <div className="col-sm-2">
            <div className="row activityOpt">
            <IconContext.Provider value={{ className: "activityIcon" }}>
                <MdSend />
                <MdFavorite />
                <MdStarBorder />
              </IconContext.Provider>
            </div>
          </div>
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
