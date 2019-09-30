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
import "../styles/Home.css";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingTop: 30,
      paddingLeft: 30,
      paddingBottom: 30
    },
    arrow: {
      color: "white"
    },
    boldText: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 600,
      color: "white"
    },
    textContainer: {
      display: "flex",
      paddingRight: 15
    },
    textFlexBox: {
      display: "flex",
      flexDirection: "column",
      flex: 9
    },
    contactLinksContainer: {
      display: "flex",
      paddingBottom: 30
    },
    listItem: {
      paddingLeft: 0,
      paddingRight: 0
    },
    body: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New"',
      color: "white"
    },
    boldLinkText: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 600,
      color: "white",
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
    },
    imageContainer: {
      display: "block"
    },
    image: {
      width: "100%",
      borderRadius: "20px",
      border: "1px solid black",
      "max-width": "400px"
    }
  })
);

const techStack = [
  {
    name: "Backend",
    description: "Node, Python, Express, Java, RESTful APIs"
  },
  {
    name: "Frontend",
    description: "Javascript, React, HTML, CSS"
  },
  {
    name: "Database",
    description: "MongoDB, PostgreSQL, Firebase, MySQL"
  },
  {
    name: "Other",
    description: "Git, Airflow, Docker, Google Cloud"
  }
];

const contactInfo = [
  {
    name: "Email",
    link: "mailto:yusufkhaled@live.ca"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yusuf-khaled-a5476386/"
  },
  {
    name: "Github",
    link: "https://github.com/yusuf-khaled"
  },
  {
    name: "Medium",
    link: "https://medium.com/@yhbk12"
  }
];

export default function AboutMe(props) {
  const classes = useStyles();

  const { onScrollUp } = props;

  const screenSmallerThanSm = useMediaQuery(theme.breakpoints.down("xs"));
  const screenSmallerThanMd = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.container} maxWidth="lg">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Scroll to top"
          onClick={onScrollUp}
          className="arrow centerDownArrow"
        >
          <UpArrow fontSize="large" />
        </IconButton>
        <Typography
          variant={screenSmallerThanSm ? "h5" : "h3"}
          color="inherit"
          className={classes.boldText}
          style={{
            paddingBottom: screenSmallerThanSm ? 20 : 60,
            paddingTop: 30
          }}
        >
          About Me
        </Typography>
        <div
          className={classes.textContainer}
          style={{
            flexDirection: screenSmallerThanMd ? "column-reverse" : "row"
          }}
        >
          <div className={classes.textFlexBox}>
            <div
              style={{
                paddingBottom: screenSmallerThanSm ? 15 : 45,
                paddingTop: screenSmallerThanMd ? 15 : 0
              }}
            >
              <Typography
                variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                color="inherit"
                className={classes.body}
              >
                I believe in writing elegant, scalable code.
              </Typography>
            </div>
            <div
              style={{
                paddingBottom: 15
              }}
            >
              <Typography
                variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                color="inherit"
                className={classes.body}
              >
                Tech stack:
              </Typography>
            </div>
            <div style={{ paddingBottom: screenSmallerThanSm ? 15 : 45 }}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                style={{
                  padding: 0
                }}
              >
                {techStack.map(t => (
                  <Grid item xs={12} sm={12} key={t.name}>
                    <ListItem classes={{ root: classes.listItem }}>
                      <div className={classes.textContainer}>
                        <Typography
                          variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                          className={classes.body}
                        >
                          •&ensp;
                          <span style={{ fontStyle: "italic" }}>
                            {t.name}
                          </span>{" "}
                          - {t.description}
                        </Typography>
                      </div>
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </div>
            <div style={{ paddingBottom: screenSmallerThanSm ? 15 : 45 }}>
              <Typography
                variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                color="inherit"
                className={classes.body}
              >
                In my spare time I like to read scifi and non-fiction books, and
                play sports - mostly soccer, tennis, and hockey.
              </Typography>
            </div>
            <div
              style={{
                paddingBottom: 15
              }}
            >
              <Typography
                variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                color="inherit"
                className={classes.boldText}
              >
                Contact info:
              </Typography>
            </div>

            <div className={classes.contactLinksContainer}>
              {contactInfo.map(c => (
                <Typography
                  variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                  key={c.name}
                >
                  <Link
                    href={c.link}
                    className={classes.boldLinkText}
                    style={{ marginRight: screenSmallerThanMd ? 20 : 30 }}
                    target={"_blank"}
                  >
                    {c.name}&ensp;
                  </Link>
                </Typography>
              ))}
            </div>
          </div>
          <div
            className={classes.imageContainer}
            style={{
              alignItems: screenSmallerThanMd ? "flex-start" : "center"
            }}
          >
            <img
              alt="Headshot"
              src="https://storage.googleapis.com/yusufkhaled-personalsite-resources/images/headshot.jpg"
              className={classes.image}
            />
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}
