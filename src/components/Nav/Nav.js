import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Contact } from "../Contact/Contact";
import { Faqs } from "../Faqs/Faqs";
import { Home } from "../Home/Home";
import { Shop } from "../Shop/Shop";
import history from "../../utils/history";
import NavLink from "./NavLink";
import myStles from "../../styles/styles";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    navDesktop: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));

export const Nav = () => {
    const classes = useStyles();
    const styles = myStles();

    return (
        <div className={classes.grow}>
            <BrowserRouter>
                <AppBar position="static" color={"transparent"}>
                    <Toolbar className={styles.spacebetween}>
                        <NavLink />
                        <div>
                            <IconButton
                                aria-label="show 4 new mails"
                                color="inherit"
                            >
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsOutlinedIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="secondary">
                                    <LocalMallOutlinedIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                // aria-controls={menuId}
                                aria-haspopup="true"
                                // onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircleOutlinedIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/faqs" component={Faqs} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
