import React from "react";
import { Toolbar, Typography, Link } from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() =>
  createStyles({
    toolBar: {
      display: "flex",
      paddingTop: 40
    },
    toolBarLeft: {
      display: "flex",
      flex: 2
    },
    toolBarRight: {
      display: "flex",
      justifyContent: "space-around",
      flex: 3
    },
    textContainer: {
      marginLeft: 8
    },
    font: {
      color: "white"
    },
    linkText: {
      fontWeight: 600,
      color: "white",
      padding: 0,
      "text-decoration": "none",
      "text-decoration-style": "initial",
      "text-decoration-color": "initial",
      "background-image":
        "linear-gradient( transparent 0%, transparent calc(50% - 8px), rgba(0, 255, 0, 0.35) calc(50% - 8px), rgba(0, 255, 0, 0.35) 100% )",
      transition:
        "background-position 120ms ease-in-out, padding 120ms ease-in-out",
      "background-size": "100% 200%",
      "background-position": "0 0",
      "&:hover": {
        "text-decoration": "none",
        backgroundColor: "rgba(0, 255, 0, 0.35)",
        borderBottom: "10px rgba(0, 255, 0, 0.35)"
      }
    }
  })
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.toolBarLeft}></div>
        <div className={classes.toolBarRight}>
          <div className={classes.textContainer}>
            <Typography variant="h5" color="inherit" className={classes.font}>
              <Link
                href="https://caravanapp.ca"
                target={"_blank"}
                className={classes.linkText}
              >
                Resume &ensp;
              </Link>
            </Typography>
          </div>
          <div className={classes.textContainer}>
            <Typography variant="h5" color="inherit" className={classes.font}>
              <Link
                href="https://caravanapp.ca"
                target={"_blank"}
                className={classes.linkText}
              >
                Blog &ensp;
              </Link>
            </Typography>
          </div>
          <div className={classes.textContainer}>
            <Typography
              variant="h5"
              color="inherit"
              className={classes.font}
            ></Typography>
          </div>
        </div>
      </Toolbar>
    </ThemeProvider>
  );
}
