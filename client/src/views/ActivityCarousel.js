import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";

import { IconContext } from "react-icons";
import { MdFavorite } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";

// import { addComment } from "../store/actions/itineraryActions";

class ActivityCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  handleComment = event => {
    console.log(event.target);
    this.setState({
      comment: event.target.value
    });
    console.log(this.state.comment);
  };

  handleAddComment = () => {
    //   this.props.dispatch(
    //     addComment({ id: activity._id, comment: this.state.comment })
    //   );
  };

  render() {
    const { activities, loggedIn } = this.props;
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
    const divStyle = {
      height: loggedIn ? "450px" : "11vh"
    };

    const sendColor =
      this.state.comment === "" ? { color: "red" } : { color: "green" };

    return (
      <div style={divStyle}>
        <Slider {...settings}>
          {activities.map((activity, i) => {
            return (
              <div key={i}>
                <Link className="linkNoDecoration" to={"/activitycard"}>
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
        {loggedIn && (
          <div className="commentItinerary row">
            <div className="col-sm-10">
              <TextField
                multiline
                rowsMax="4"
                id="standard-comment"
                label="Comment this Itinerary"
                variant="outlined"
                value={this.state.comment}
                fullWidth
                onChange={this.handleComment}
              />
            </div>
            <div className="col-sm-2">
              <div className="row activityOpt">
                <IconContext.Provider value={{ className: "activityIcon" }}>
                  <MdSend
                    style={sendColor}
                    onClick={this.state.comment && this.handleAddComment}
                  />
                  <MdFavorite />
                  <MdStarBorder />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activities.items,
  loggedIn: state.users.loggedIn
});

export default connect(mapStateToProps)(ActivityCarousel);
