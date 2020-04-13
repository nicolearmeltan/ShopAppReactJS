import React, { useState, useMemo, forwardRef } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import { Contact } from "../Contact/Contact";
import { Faqs } from "../Faqs/Faqs";
import { Home } from "../Home/Home";
import { Shop } from "../Shop/Shop";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import history from '../../utils/history';

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
  navMobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  navLink: {
    color: "seagreen",
    margin: "0 30px 0 30px",
    fontSize: "16px",
    textDecoration: "none",
  },
  navDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const Nav = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [drawerStatus, setDrawerStatus] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const linksDesktop = [
    { linkUrl: "/", linkText: "Home" },
    { linkUrl: "/shop", linkText: "Shop" },
    { linkUrl: "/contact", linkText: "Contact Us" },
    { linkUrl: "/faqs", linkText: "Faqs" },
  ];

  const linksMobile = [
    ...linksDesktop,
    {},
    { linkUrl: "/profile", linkText: "Profile" },
    { linkUrl: "/account", linkText: "Account" },
    { linkUrl: "/settings", linkText: "Settings" },
  ];

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const handleClick = (links) => {
    console.log(links);
    history.push(links)
  };

  return (
    <div className={classes.grow}>
      <BrowserRouter>
        <AppBar position="static" color={"transparent"}>
          <Toolbar>
            <div className={classes.navMobile}>
              <Button onClick={() => setDrawerStatus(true)}>
                <MenuIcon />
              </Button>
              <SwipeableDrawer
                anchor={"left"}
                open={drawerStatus}
                onClose={() => setDrawerStatus(false)}
                onOpen={() => setDrawerStatus(true)}
              >
                <List>
                  {linksMobile.map((linkItems, index) => {
                    return (
                      linkItems.linkUrl ?
                      <ListItem button key={index} onClick={() => setDrawerStatus(false)}>
                      <Link to={linkItems.linkUrl} key={linkItems.text + index} className={classes.navLink}>
                        {linkItems.linkText}
                      </Link>
                      </ListItem> :
                      <Divider key={"divider" + index} />
                    )
                  })}
              </List>
              </SwipeableDrawer>
            </div>

            <Typography className={classes.title} variant="h6" noWrap>
              Logo Holder
            </Typography>
            <div className={clsx(classes.grow, classes.navDesktop)}>
              {linksDesktop.map((linkItems, index) => {
                return (
                  <Link to={linkItems.linkUrl}  key={index} className={classes.navLink}>
                    {linkItems.linkText}
                  </Link>
                );
              })}
            </div>
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
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
