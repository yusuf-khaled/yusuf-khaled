import React from "react";
import {
  Typography,
  Container,
  Link,
  useMediaQuery,
  IconButton
} from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import DownArrow from "@material-ui/icons/KeyboardArrowDown";
import { Element as ScrollElement, scroller } from "react-scroll";
import "../styles/Home.css";
import AboutMe from "./AboutMe";
import Work from "./Work";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "100%",
      paddingLeft: 30,
      paddingRight: 30
    },
    title: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New"',
      color: "white"
    },
    body: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New"',
      color: "white"
    },
    linkText: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
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
    },
    boldText: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 600,
      color: "white"
    },
    arrow: {
      height: 100,
      width: 100
    }
  })
);

export default function Home() {
  const classes = useStyles();

  const screenSmallerThanSm = useMediaQuery(theme.breakpoints.down("xs"));

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToAbout() {
    scroller.scrollTo("about-me", { smooth: true });
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollElement name="top">
          <Container
            className={classes.container}
            maxWidth="lg"
            style={{
              paddingTop: screenSmallerThanSm ? 10 : 60
            }}
          >
            <div>
              <Typography
                variant={screenSmallerThanSm ? "h5" : "h3"}
                color="inherit"
                className={classes.title}
                style={{ paddingBottom: screenSmallerThanSm ? 20 : 60 }}
              >
                Hello! My name is{" "}
                <span className={classes.boldText}>Yusuf</span>.
              </Typography>
            </div>
            <div style={{ paddingBottom: screenSmallerThanSm ? 15 : 45 }}>
              <Typography
                variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                color="inherit"
                className={classes.body}
              >
                I'm a software engineer interested in solving impactful
                problems.
              </Typography>
            </div>
            <div style={{ paddingBottom: screenSmallerThanSm ? 15 : 45 }}>
              <Typography
                variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                color="inherit"
                className={classes.body}
              >
                Most recently I co-founded&ensp;
                <Link
                  className={classes.linkText}
                  href="https://caravanapp.ca"
                  target={"_blank"}
                >
                  Caravan
                </Link>
                : a global online book club for readers to connect{" "}
                <span style={{ fontStyle: "italic" }}>beyond</span> reviews and
                recommendations.
              </Typography>
            </div>
            <div style={{ paddingBottom: screenSmallerThanSm ? 15 : 45 }}>
              <Typography
                variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                color="inherit"
                className={classes.body}
              >
                In April I graduated from{" "}
                <span className={classes.boldText}>Waterloo Engineering</span>.
                As part of my degree I gained{" "}
                <span className={classes.boldText}>2 years</span> of work
                experience building and shipping software.
              </Typography>
            </div>
            <div
              className={classes.textContainer}
              style={{ paddingBottom: screenSmallerThanSm ? 15 : 45 }}
            >
              <Typography
                variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                color="inherit"
                className={classes.body}
              >
                Click the arrow below for contact information and recent
                projects.
              </Typography>
            </div>
            <div style={{ paddingBottom: screenSmallerThanSm ? 60 : 90 }}>
              <Typography
                variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                color="inherit"
                className={classes.body}
              >
                <Link
                  className={classes.linkText}
                  href="mailto:yusufkhaled@live.ca"
                  target={"_blank"}
                >
                  Let's Talk. &ensp;
                </Link>
              </Typography>
            </div>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="See projects and experience"
              onClick={scrollToAbout}
              className="arrow center move"
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1
              }}
            >
              <DownArrow fontSize="large" />
            </IconButton>
          </Container>
          <hr style={{ border: "1px dashed white" }} />
        </ScrollElement>
      </ThemeProvider>
      <ScrollElement name="about-me">
        <AboutMe onScrollUp={scrollToTop} />
      </ScrollElement>
      <ScrollElement name="work">
        <Work onScrollUp={scrollToAbout} />
      </ScrollElement>
    </>
  );
}
