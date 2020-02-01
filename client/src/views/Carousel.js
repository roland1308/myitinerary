import React from "react";

function Carousel() {
  return (
    <div id="carousel-with-lb" className="carousel slide carousel-multi-item" data-ride="carousel">
    
      <div className="controls-top">
        <a className="btn-floating btn-secondary" href="#carousel-with-lb" data-slide="prev"><i
            className="fas fa-chevron-left"></i></a>
        <a className="btn-floating btn-secondary" href="#carousel-with-lb" data-slide="next"><i
            className="fas fa-chevron-right"></i></a>
      </div>
    
      <ol className="carousel-indicators">
        <li data-target="#carousel-with-lb" data-slide-to="0" className="active secondary-color"></li>
        <li data-target="#carousel-with-lb" data-slide-to="1" className="secondary-color"></li>
        <li data-target="#carousel-with-lb" data-slide-to="2" className="secondary-color"></li>
      </ol>
    
      <div className="carousel-inner mdb-lightbox" role="listbox">
        <div id="mdb-lightbox-ui"></div>
        <div className=" carousel-item active text-center">
    
          <figure className="col-md-6 d-md-inline-block">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg"
              data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg"
                className="img-fluid" />
            </a>
          </figure>
    
          <figure className="col-md-6 d-md-inline-block">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg"
              data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg"
                className="img-fluid" />
            </a>
          </figure>
    
          <figure className="col-md-6 d-md-inline-block">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg"
              data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg"
                className="img-fluid" />
            </a>
          </figure>
    
          <figure className="col-md-6 d-md-inline-block">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg"
              data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg"
                className="img-fluid" />
            </a>
          </figure>

    
        </div>
        <div className="carousel-item text-center">
    
          
    
          <figure className="col-md-6 d-md-inline-block">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(29).jpg"
              data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(29).jpg"
                className="img-fluid" />
            </a>
          </figure>
    
          <figure className="col-md-6 d-md-inline-block">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
              data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                className="img-fluid" />
            </a>
          </figure>
          <figure className="col-md-6 d-md-inline-block">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
              data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
                className="img-fluid" />
            </a>
          </figure>
          <figure className="col-md-6 d-md-inline-block">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(33).jpg"
              data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(33).jpg"
                className="img-fluid" />
            </a>
          </figure>
    
        </div>
        <div className="carousel-item text-center">
    
          
    
          <figure className="col-md-6 d-md-inline-block">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(66).jpg"
              data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(66).jpg"
                className="img-fluid" />
            </a>
          </figure>
    
          <figure className="col-md-6 d-md-inline-block">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
              data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                className="img-fluid" />
            </a>
          </figure>
          <figure className="col-md-6 d-md-inline-block">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(56).jpg"
              data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(56).jpg"
                className="img-fluid" />
            </a>
          </figure>
          <figure className="col-md-6 d-md-inline-block">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg"
              data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg"
                className="img-fluid" />
            </a>
          </figure>
    
        </div>
    
      </div>
          
    <a className="carousel-control-prev" href="#carousel-with-lb" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#carousel-with-lb" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>

    
    </div>
  )}

export default Carousel;
