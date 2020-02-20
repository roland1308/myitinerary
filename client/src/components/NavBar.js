import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

import { IoIosLogIn } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoIosPower } from "react-icons/io";
import { FaPenNib } from "react-icons/fa";

import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

import React, { Component } from "react";
import { connect } from "react-redux";

export class NavBar extends Component {
  render() {
    const { loggedIn, avatar } = this.props;
    console.log("LOGGED", loggedIn);
    return (
      <div className="flexNavbar">
        {loggedIn === true ? (
          <div className="dropdown">
            <Avatar alt="USER" src={avatar} data-toggle="dropdown" />
            <div className="dropdown-menu">
              <Link
                to={"/login"}
                className="dropdown-item linkNoDecoration menuText"
              >
                Preferences <IoIosSettings />
              </Link>
              <Link
                to={"/releasetoken"}
                className="dropdown-item linkNoDecoration menuText"
              >
                Logout <IoIosPower />
              </Link>
            </div>
          </div>
        ) : (
          <div className="dropdown">
            <AccountCircleTwoToneIcon
              style={{ fontSize: 100 }}
              className="colorPrimary"
              data-toggle="dropdown"
            />
            <div className="dropdown-menu">
              <Link
                to={"/login"}
                className="dropdown-item linkNoDecoration menuText"
              >
                Login <IoIosLogIn />
              </Link>
              <Link
                to={"/createaccount"}
                className="dropdown-item linkNoDecoration menuText"
              >
                Register <FaPenNib />
              </Link>
            </div>
          </div>
        )}
        <Link to={"ListUsers"}>
          <MenuRoundedIcon style={{ fontSize: 100 }} className="colorPrimary" />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  avatar: state.users.avatar,
  loggedIn: state.app.loggedIn
});

export default connect(mapStateToProps)(NavBar);
