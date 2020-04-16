import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import myStles from "../../styles/styles";
import InputBase from "@material-ui/core/InputBase";

const SearchBar = () => {
    const styles = myStles();

    return (
        <div className={styles.search}>
            <div className={styles.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search Products"
                classes={{
                    root: styles.inputRoot,
                    input: styles.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
            />
        </div>
    );
};

export default SearchBar;
