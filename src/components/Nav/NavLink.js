import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import myStles from "../../styles/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const NavLink = () => {
    const [drawerStatus, setDrawerStatus] = useState(false);
    const styles = myStles();
    const theme = useTheme();
    let mobileView = useMediaQuery("(max-width:720px)");
    console.log(mobileView);

    const linksDesktop = [
        { linkUrl: "/", linkText: "Home", icon: <HomeOutlinedIcon /> },
        {
            linkUrl: "/shop",
            linkText: "Shop",
            icon: <StorefrontOutlinedIcon />,
        },
        {
            linkUrl: "/contact",
            linkText: "Contact Us",
            icon: <CallOutlinedIcon />,
        },
        {
            linkUrl: "/faqs",
            linkText: "Faqs",
            icon: <HelpOutlineOutlinedIcon />,
        },
    ];

    const linksMobile = [
        ...linksDesktop,
        {},
        {
            linkUrl: "/transact",
            linkText: "Transaction History",
            icon: <ReceiptOutlinedIcon />,
        },
        {
            linkUrl: "/account",
            linkText: "Account",
            icon: <AccountCircleOutlinedIcon />,
        },
        {
            linkUrl: "/settings",
            linkText: "Settings",
            icon: <SettingsOutlinedIcon />,
        },
    ];

    return (
        <>
            {mobileView ? (
                <div className={styles.navMobile}>
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
                                return linkItems.linkUrl ? (
                                    <ListItem
                                        button
                                        key={index}
                                        onClick={() => setDrawerStatus(false)}
                                    >
                                        <ListItemIcon>
                                            {linkItems.icon}
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Link
                                                to={linkItems.linkUrl}
                                                key={linkItems.text + index}
                                                className={styles.navLink}
                                            >
                                                {linkItems.linkText}
                                            </Link>
                                        </ListItemText>
                                    </ListItem>
                                ) : (
                                    <Divider key={"divider" + index} />
                                );
                            })}
                        </List>
                    </SwipeableDrawer>
                </div>
            ) : (
                // <div className={styles.grow}>
                    <ul>
                    {linksDesktop.map((linkItems, index) => {
                        return (
                            <li>
                            {linkItems.icon}
                            <Link
                                to={linkItems.linkUrl}
                                key={index}
                                className={styles.navLink}
                            >
                                {linkItems.linkText}
                            </Link>
                            </li>
                        );
                    })}
                    </ul>
                // </div>
            )}
        </>
    );
};

export default NavLink;
