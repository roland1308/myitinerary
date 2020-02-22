import React from "react";
import { homeOn, backOn, searchOff } from "../store/actions/appActions";
import { loginUser, logInUserOff } from "../store/actions/userActions";

import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
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
    this.props.dispatch(logInUserOff());
  };

  render() {
    const { loggedIn, credentials } = this.props;
    return (
      <div className="account">
        <h1>Login</h1>
        <form className="accountForm" onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              autoFocus={true}
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
        {!credentials && (
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
        {loggedIn && (
          <div className="backgroundGrey">
            <div className="popupInput">
              <h1>GREAT! You are logged in!</h1>
              <Link to="/">
                <Button
                  onClick={this.closeLogged}
                  size="large"
                  variant="contained"
                >
                  home
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errorMsg: state.users.errorMsg,
  credentials: state.users.credentials,
  loggedIn: state.users.loggedIn,
  token: state.users.token
});

export default connect(mapStateToProps)(LogIn);
