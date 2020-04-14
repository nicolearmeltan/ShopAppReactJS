import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import myStles from "../../styles/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const NavLink = () => {
    const [drawerStatus, setDrawerStatus] = useState(false);
    const styles = myStles();
    const theme = useTheme();
    let mobileView = useMediaQuery("(max-width:720px)");
    console.log(mobileView);

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
                                        <Link
                                            to={linkItems.linkUrl}
                                            key={linkItems.text + index}
                                            className={styles.navLink}
                                        >
                                            {linkItems.linkText}
                                        </Link>
                                    </ListItem>
                                ) : (
                                    <Divider key={"divider" + index} />
                                );
                            })}
                        </List>
                    </SwipeableDrawer>
                </div>
            ) : (
                <div className={styles.grow}>
                    {linksDesktop.map((linkItems, index) => {
                        return (
                            <Link
                                to={linkItems.linkUrl}
                                key={index}
                                className={styles.navLink}
                            >
                                {linkItems.linkText}
                            </Link>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default NavLink;
