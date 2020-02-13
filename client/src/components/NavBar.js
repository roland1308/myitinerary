import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flexNavbar">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircleTwoToneIcon
          style={{ fontSize: 100 }}
          className="colorPrimary"
        />
      </Button>
      <Link to={"ListUsers"}>
      <MenuRoundedIcon style={{ fontSize: 100 }} className="colorPrimary" />
      </Link>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={"/login"} className="linkNoDecoration">
          <MenuItem onClick={handleClose}>
            Login
            <ExitToAppTwoToneIcon className="logItems" />
          </MenuItem>
        </Link>
        <Link to={"/createAccount"} className="linkNoDecoration">
          <MenuItem onClick={handleClose}>
            Register
            <CreateTwoToneIcon className="logItems" />
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
