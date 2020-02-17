import React from "react";
import { homeOn, backOn, searchOff } from "../store/actions/appActions";

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

  handleChange = event => {
    switch (event.target.type) {
      case "text":
        this.setState({
          username: event.target.value
        });
        break;
      case "password":
        this.setState({
          pw: event.target.value
        });
        break;
      default:
        break;
    }
  };

  handleSubmit = event => {
    alert("A name was submitted: " + this.state.pw);
    event.preventDefault();
  };

  render() {
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
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={this.state.pw}
              required="required"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default connect()(LogIn);
