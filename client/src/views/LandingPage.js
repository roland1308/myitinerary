import React from "react";
import start from "../images/circled-right-2.png";
import logo from "../images/MYtineraryLogo.png";
import homeIcon from "../images/homeIcon.png";

function LandingPage() {
  return (
    <div className="landing">
      <div>
        <img className="logo" src={logo} alt="MYtinerary Logo" />
      </div>
      <div>
        <h2>
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </h2>
      </div>
      <div>
        <h1>Start Browsing</h1>
      </div>
      <div>
        <img className="button" src={start} alt="Start Browsing" />
      </div>
      <div>
        <h2>Want to build your own MYtinerary?</h2>
      </div>
      <div>
        <div className="LogAccount">
        <a href="/">Log In</a>
        <a href="/">Create Account</a>
        </div>
      </div>
      <div>
        <img className="home" src={homeIcon} alt="Back Home" />
      </div>
    </div>
  );
}

export default LandingPage;
