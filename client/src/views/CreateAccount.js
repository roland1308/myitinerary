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
      username: "",
      email: "",
      picture: null,
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
    formResult.append("externalid", null);
    this.props.dispatch(addUser(formResult));
  };

  closeError = () => {
    this.props.dispatch(resetError());
  };

  closeAdded = () => {
    this.props.dispatch(resetAdded());
    this.props.history.push("/");
  }

  render() {
    const { error, success, avatar } = this.props;
    return (
      <div className="account">
        <h1>Create New Account</h1>
        <div className="accountAvatar">
          <Avatar className="big" alt={this.state.username} src={avatar} />
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
        <div className="translateNewForm">
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
              {error === "ESISTE UTENTE" && (
                <h1>Sorry: this username already exists!</h1>
              )}
              {error === "ESISTE EMAIL" && (
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
        {success && (
          <div className="backgroundGrey">
            <div className="popupInput">
              <h1>GREAT! New user added</h1>
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
  error: state.users.error,
  success: state.users.success,
  avatar: state.users.avatar
});

export default connect(mapStateToProps)(CreateAccount);
