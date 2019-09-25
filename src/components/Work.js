import React from "react";
import {
  Typography,
  Container,
  useMediaQuery,
  IconButton,
  ListItem,
  Grid,
  Link
} from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import UpArrow from "@material-ui/icons/KeyboardArrowUp";
import DownArrow from "@material-ui/icons/KeyboardArrowDown";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 60
    },
    arrowContainer: {
      display: "flex",
      justifyContent: "center"
    },
    arrow: {
      color: "white"
    },
    boldText: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 600,
      color: "white"
    },
    robotoNonBoldText: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      color: "white"
    },
    title: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New"',
      color: "white",
      fontWeight: 600
    },
    experience: {
      display: "flex",
      flexDirection: "column"
    },
    experienceContainer: {
      display: "flex"
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      flex: 7,
      paddingBottom: 10
    },
    imageContainer: {
      display: "flex",
      flex: 3,
      paddingBottom: 10
    },
    image: {
      height: "60%",
      width: "100%",
      display: "block",
      borderRadius: 5,
      //marginRight: 16,
      objectFit: "cover",
      border: "1px solid black"
    },
    listItem: {
      paddingLeft: 0,
      paddingRight: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    },
    body: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New"',
      color: "white"
    },
    linkText: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New"',
      color: "white",
      marginRight: 30,
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
        backgroundColor: "rgba(0, 255, 0, 0.35)", //"#09d3ac",
        borderBottom: "10px rgba(0, 255, 0, 0.35)"
      }
    }
  })
);

const work = [
  {
    company: "Caravan",
    position: "Co-founder/Software Engineer",
    description:
      "I am the co-founder of Caravan, a site for readers to find and join online book clubs. Caravan was built in association with Velocity, UWaterloo's incubator for early-stage start-ups. We launched the site at the end of June, and in 12 weeks we've grown to 2000+ users, 35% of whom chat daily. This represents a weekly growth rate of 45%!"
  }
];

export default function Work(props) {
  const classes = useStyles();

  const { onScrollUp, onScrollDown } = props;

  const screenSmallerThanSm = useMediaQuery(theme.breakpoints.down("xs"));
  const screenSmallerThanMd = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.container} maxWidth="lg">
        <Typography
          variant={screenSmallerThanSm ? "h5" : "h3"}
          color="inherit"
          className={classes.boldText}
          style={{
            paddingBottom: screenSmallerThanSm ? 20 : 60,
            paddingTop: 30
          }}
        >
          Recent Work
        </Typography>
        <div className={classes.experience}>
          <div
            style={{
              paddingBottom: screenSmallerThanSm ? 15 : 45
            }}
          >
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              style={{
                padding: 0
              }}
            >
              {work.map(w => (
                <Grid item xs={12} sm={12} key={w.company}>
                  <ListItem classes={{ root: classes.listItem }}>
                    <div
                      className={classes.experienceContainer}
                      style={{
                        flexDirection: screenSmallerThanMd
                          ? "column-reverse"
                          : "row"
                      }}
                    >
                      <div className={classes.textContainer}>
                        <Typography
                          variant={screenSmallerThanSm ? "h6" : "h4"}
                          className={classes.body}
                        >
                          <span className={classes.boldText}>{w.company}</span>
                          &ensp;
                          <span className={classes.robotoNonBoldText}>
                            ({w.position})
                          </span>
                        </Typography>
                        <br />
                        <Typography
                          variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                          className={classes.body}
                        >
                          {w.description}
                        </Typography>
                      </div>
                      <div className={classes.imageContainer}>
                        <img
                          href="../resources/headshot.jpg"
                          alt="conclave editor"
                        />
                      </div>
                    </div>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}
