import React from "react";
import { homeOn, backOn, searchOff } from "../store/actions/appActions";
import { addUser } from "../store/actions/userActions";

import Avatar from "@material-ui/core/Avatar";

import { connect } from "react-redux";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      picture: "https://source.unsplash.com/640x480/?face",
      pw: ""
    };
  }
  componentDidMount() {
    this.props.dispatch(homeOn());
    this.props.dispatch(backOn());
    this.props.dispatch(searchOff());
  }

  handleUser = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePicture = (e) => {
    this.setState({
      picture: e.target.value,
    });
  };  handlePw = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  handleSubmit = event => {
    console.log(JSON.stringify(this.state));
    this.props.dispatch(addUser(this.state));
    event.preventDefault();
  };

  render() {
    return (
      <div className="account">
          <div className="accountAvatar">
        <Avatar alt={this.state.userName} src={this.state.picture} />
        </div>
        <h2>Create New Account</h2>
        <form className="accountForm" onSubmit={this.handleSubmit}>
          <label>
            Username*:
            <input
              type="text"
              value={this.state.userName}
              required="required"
              onChange={this.handleUser}
            />
          </label>
          <label>
            E-Mail Address*:
            <input
              type="email"
              value={this.state.email}
              required="required"
              onChange={this.handleEmail}
            />
          </label>
          <label>
            Profile Picture*:
            <input
              type="url"
              value={this.state.picture}
              required="required"
              onChange={this.handlePicture}
            />
          </label>
          <label>
            Password* (at least 5 characters):
            <input
              type="password"
              value={this.state.pw}
              required="required"
              onChange={this.handlePw}
            />
          </label>
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default connect()(CreateAccount);
