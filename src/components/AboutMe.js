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
      paddingTop: 30
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
    title: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New"',
      color: "white",
      fontWeight: 600
    },
    textContainer: {
      display: "flex"
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
    imageContainer: {
      display: "flex",
      flex: 3,
      flexDirection: "column",
      justifyContent: "flex-start",
      paddingBottom: 10
    },
    listItem: {
      paddingLeft: 0,
      paddingRight: 0
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
    },
    image: {
      height: "80%",
      width: "100%",
      display: "block",
      borderRadius: 5,
      //marginRight: 16,
      objectFit: "cover",
      border: "1px solid black"
    }
  })
);

const techStack = [
  {
    name: "Backend",
    description: "Java, Node.js, Express, Python, Git"
  },
  {
    name: "Frontend",
    description: "React, HTML, CSS, React Native"
  },
  {
    name: "Database",
    description: "MongoDB, Postgres, Firebase, MySQL"
  },
  {
    name: "DevOps",
    description: "Airflow, Docker, Google Cloud,  AWS"
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

  const { onScrollUp, onScrollDown } = props;

  const screenSmallerThanSm = useMediaQuery(theme.breakpoints.down("xs"));
  const screenSmallerThanMd = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.arrowContainer}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Scroll to top"
            onClick={onScrollUp}
          >
            <UpArrow fontSize="large" className={classes.arrow} />
          </IconButton>
        </div>
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
                paddingBottom: screenSmallerThanSm ? 15 : 45
              }}
            >
              <Typography
                variant={screenSmallerThanSm ? "subtitle2" : "h5"}
                color="inherit"
                className={classes.body}
              >
                I believe in writing elegant, scalable code that solves real
                problems.
              </Typography>
            </div>
            <div
              style={{
                paddingBottom: screenSmallerThanSm ? 15 : 45
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
            <div
              style={{
                paddingBottom: screenSmallerThanSm ? 15 : 45
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
                    className={classes.linkText}
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
              src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/70929094_10214947516981476_6125465637247516672_o.jpg?_nc_cat=103&_nc_oc=AQni4ftEZz6C83voEKnGaCNp9Ptxto0a8k9e2eoYRpmLUqWnN1TOrQPLIZZ8xvIv18kxiJBAJD8zEhXtQmWJvkuc&_nc_ht=scontent-yyz1-1.xx&oh=e71d2dd8eca099fb8cfc1863a6284546&oe=5DF2FF84"
              className={classes.image}
            />
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}
