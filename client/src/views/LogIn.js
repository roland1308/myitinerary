import React from "react";
import {
  homeOn,
  backOn,
  searchOff,
  loginUser
} from "../store/actions/appActions";
import { resetError, resetLogged } from "../store/actions/appActions";

import Button from "@material-ui/core/Button";

import { connect } from "react-redux";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      pw: ""
    };
  }
  componentDidMount() {
    this.props.dispatch(homeOn());
    this.props.dispatch(backOn());
    this.props.dispatch(searchOff());
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(loginUser(this.state));
  };

  closeError = () => {
    this.props.dispatch(resetError());
  };

  closeAdded = () => {
    this.props.dispatch(resetLogged());
    this.props.history.push("storetoken/?token=" + this.props.token);
  }


  render() {
    const { error, success } = this.props;
    return (
      <div className="account">
        <h1>Login</h1>
        <form className="accountForm" onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              required="required"
              name="username"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={this.state.pw}
              required="required"
              name="pw"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
        <div>
          <a
            className="linkNoDecoration"
            href="http://localhost:5000/users/google"
          >
            <h1>or</h1>
            <img
              src={require("../images/googlesignup.jpg")}
              alt="GOOGLE SIGN UP"
            />
          </a>
        </div>
        {error && (
          <div className="backgroundGrey">
            <div className="popupInput">
                <h1>Sorry: unknown credentials!</h1>
              <Button
                onClick={this.closeError}
                size="large"
                variant="contained"
              >
                close
              </Button>
            </div>
          </div>
        )}
        {success && (
          <div className="backgroundGrey">
            <div className="popupInput">
              <h1>GREAT! You are logged in!</h1>
                <Button
                onClick={this.closeAdded}
                size="large"
                variant="contained"
                >
                  home
                </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.app.error,
  success: state.app.success,
  token: state.app.token
});

export default connect(mapStateToProps)(LogIn);