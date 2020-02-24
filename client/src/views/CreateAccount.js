import React from "react";

import { connect } from "react-redux";

import { homeOn, backOn, searchOff } from "../store/actions/appActions";
import { addUser, resetError, resetAdded } from "../store/actions/userActions";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      capitalize: "",
      username: "",
      email: "",
      picture: "/",
      pw: ""
    };
  }
  componentDidMount() {
    this.props.dispatch(homeOn());
    this.props.dispatch(backOn());
    this.props.dispatch(searchOff());
  }

  handleChange = e => {
    switch (e.target.name) {
      case "selectedFile":
        this.setState({ picture: e.target.files[0] });
        break;
      case "username":
        const capitalize = e.target.value.replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        this.setState({ username: capitalize });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, picture, pw } = this.state;
    let formResult = new FormData();
    formResult.append("username", username);
    formResult.append("email", email);
    formResult.append("picture", picture);
    formResult.append("pw", pw);
    this.props.dispatch(addUser(formResult));
  };

  closeError = () => {
    this.props.dispatch(resetError());
  };

  closeAdded = () => {
    this.props.dispatch(resetAdded());
    this.props.history.push("/");
  };

  render() {
    const { errorMsg, popup } = this.props;
    const fixedHeight = window.innerHeight * 0.86;
    const accountDivStyle = {
      height: fixedHeight.toString() + "px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "flex-start",
      fontSize: "3rem"
    };
    return (
      <div style={accountDivStyle}>
        <h1>Create New Account</h1>
        <div className="accountAvatar">
          <Avatar
            className="big"
            alt={this.state.username}
            src={this.state.picture}
          />
        </div>
        <form
          id="myForm"
          className="accountForm translateNewForm"
          method="post"
          encType="multipart/form-data"
          onSubmit={this.handleSubmit}
        >
          <label>
            Username*:
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
            E-Mail Address*:
            <input
              type="email"
              value={this.state.email}
              required="required"
              name="email"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Profile Picture*:
            <input
              type="file"
              name="selectedFile"
              // value={this.state.picture}
              required="required"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password* (at least 5 characters):
            <input
              type="password"
              value={this.state.pw}
              required="required"
              minLength="5"
              name="pw"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Register" />
        </form>
        <h1 className="translateNewForm">or</h1>
        <div className="row">
          <div className="translateNewForm col-sm">
            <a
              className="linkNoDecoration"
              href="http://localhost:5000/users/google"
            >
              <img
                className="login_Logo"
                src={require("../images/googlelogo.jpg")}
                alt="GOOGLE SIGN UP"
              />
            </a>
          </div>
          <div className="translateNewForm col-sm">
            <a
              className="linkNoDecoration"
              href="http://localhost:5000/users/github"
            >
              <img
                className="login_Logo"
                src={require("../images/github.png")}
                alt="GOOGLE SIGN UP"
              />
            </a>
          </div>
        </div>
        {errorMsg && (
          <div className="backgroundGrey">
            <div className="popupInput">
              {errorMsg.includes("username") && (
                <h1>Sorry: this username already exists!</h1>
              )}
              {errorMsg.includes("email") && (
                <h1>Sorry: this e-mail address already exists!</h1>
              )}
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
        {popup && errorMsg === "" && (
          <div className="backgroundGrey">
            <div className="popupInput">
              <h1>GREAT! New user added</h1>

              <Button
                size="large"
                variant="contained"
                onClick={this.closeAdded}
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
  errorMsg: state.users.errorMsg,
  popup: state.users.popup
});

export default connect(mapStateToProps)(CreateAccount);
