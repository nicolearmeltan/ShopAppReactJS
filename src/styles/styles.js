import { makeStyles } from "@material-ui/core/styles";

const myStles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    navLink: {
        color: "seagreen",
        margin: "0 30px 0 30px",
        fontSize: "16px",
        textDecoration: "none",
    },
}));

export default myStles;