import React from "react";
import NavigateBeforeTwoToneIcon from "@material-ui/icons/NavigateBeforeTwoTone";
import NavigateNextTwoToneIcon from "@material-ui/icons/NavigateNextTwoTone";

function Carousel() {
  return (
    <div>
      <div>
      <h2 className="padding17">Popular MYtineraries</h2>
      </div>
    <div
      id="carousel-with-lb"
      className="carousel slide carousel-multi-item"
      data-ride="carousel"
    >
      <div className="carousel-inner mdb-lightbox" role="listbox">
        <div id="mdb-lightbox-ui"></div>
        <div className=" carousel-item active text-center">
          <figure className="col-md-6 d-md-inline-block">
            <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg"
                className="img-fluid"
              />
          </figure>
          <figure className="col-md-6 d-md-inline-block">
            <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg"
                className="img-fluid"
              />
          </figure>
          <figure className="col-md-6 d-md-inline-block">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg"
                className="img-fluid"
              />
          </figure>
          <figure className="col-md-6 d-md-inline-block">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg"
                className="img-fluid"
              />
          </figure>
        </div>
        <div className="carousel-item text-center">
          <figure className="col-md-6 d-md-inline-block">
            <a
              href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(29).jpg"
              data-size="1600x1067"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(29).jpg"
                className="img-fluid"
              />
            </a>
          </figure>
          <figure className="col-md-6 d-md-inline-block">
            <a
              href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
              data-size="1600x1067"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                className="img-fluid"
              />
            </a>
          </figure>
          <figure className="col-md-6 d-md-inline-block">
            <a
              href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
              data-size="1600x1067"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
                className="img-fluid"
              />
            </a>
          </figure>
          <figure className="col-md-6 d-md-inline-block">
            <a
              href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(33).jpg"
              data-size="1600x1067"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(33).jpg"
                className="img-fluid"
              />
            </a>
          </figure>
        </div>
        <div className="carousel-item text-center">
          <figure className="col-md-6 d-md-inline-block">
            <a
              href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(66).jpg"
              data-size="1600x1067"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(66).jpg"
                className="img-fluid"
              />
            </a>
          </figure>
          <figure className="col-md-6 d-md-inline-block">
            <a
              href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
              data-size="1600x1067"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                className="img-fluid"
              />
            </a>
          </figure>
          <figure className="col-md-6 d-md-inline-block">
            <a
              href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(56).jpg"
              data-size="1600x1067"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(56).jpg"
                className="img-fluid"
              />
            </a>
          </figure>
          <figure className="col-md-6 d-md-inline-block">
            <a
              href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg"
              data-size="1600x1067"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg"
                className="img-fluid"
              />
            </a>
          </figure>
        </div>
      </div>
      <div className="controls-row">
        <div className="">
          <a href="#carousel-with-lb" data-slide="prev">
            <NavigateBeforeTwoToneIcon className="controls" />
          </a>
        </div>
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-with-lb"
            data-slide-to="0"
            className="active secondary-color"
          ></li>
          <li
            data-target="#carousel-with-lb"
            data-slide-to="1"
            className="secondary-color"
          ></li>
          <li
            data-target="#carousel-with-lb"
            data-slide-to="2"
            className="secondary-color"
          ></li>
        </ol>
        <div className="">
          <a href="#carousel-with-lb" data-slide="next">
            <NavigateNextTwoToneIcon className="controls" />
          </a>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Carousel;
