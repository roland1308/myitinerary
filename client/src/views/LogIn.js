import React from "react";
import { homeOn, backOn, searchOff } from "../store/actions/appActions";

import { connect } from "react-redux";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      pw: ""
    };
  }
  componentDidMount() {
    this.props.dispatch(homeOn());
    this.props.dispatch(backOn());
    this.props.dispatch(searchOff());
  }

  handleChange = event => {
    console.log(event.target);
    this.setState({
      value: event.target.value,
      pw: event.target.pw
    });
  };

  handleSubmit = event => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <div className="account">
        <h2>Login</h2>
        <form className="accountForm" onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={this.state.pw}
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
