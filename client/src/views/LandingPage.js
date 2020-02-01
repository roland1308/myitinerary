import React from "react";
import start from "../images/circled-right-2.png";

function LandingPage() {
  return (
    <div className="landing">
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
    </div>
  );
}

export default LandingPage;
