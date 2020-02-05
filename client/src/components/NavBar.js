import React from 'react';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function NavBar() {
    return (
        <div className="flexNavbar">
            <Router>
                <Link to="/LogIn">
                    <AccountCircleTwoToneIcon style={{ fontSize: 100 }} className="colorPrimary" />
                </Link>
                <MenuRoundedIcon style={{ fontSize: 100 }} className="colorPrimary" />
           </Router>
        </div>
    )
}

export default NavBar
