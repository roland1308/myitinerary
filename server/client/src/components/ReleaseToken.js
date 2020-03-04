import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { logInAppOff } from "../store/actions/appActions";
import { logInUserOff } from "../store/actions/userActions";

export class ReleaseToken extends Component {
  logOut = () => {
    window.localStorage.setItem("token", "");
    window.localStorage.setItem("idcitta", "");
    this.props.dispatch(logInUserOff());
    this.props.dispatch(logInAppOff());
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="backgroundGrey">
        <div className="popupInput">
          <h1>Are you sure to LOG OUT?</h1>
          <Button onClick={this.logOut} size="large" variant="contained">
            yes please
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ReleaseToken);
