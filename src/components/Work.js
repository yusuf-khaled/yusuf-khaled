import React from "react";
import { Typography, Container, useMediaQuery, Link } from "@material-ui/core";
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
    container: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 60
    },
    sectionContainer: {
      display: "flex",
      marginBottom: 50,
      justifyContent: "space-between"
    },
    textContainer: {
      display: "block",
      paddingTop: 15,
      paddingRight: 15
    },
    boldText: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 600,
      color: "white"
    },
    body: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New"',
      color: "white"
    },
    linkText: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New"',
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
      display: "block",
      paddingTop: 15
    },
    image: {
      width: "100%",
      borderRadius: "20px",
      border: "1px solid black",
      "max-width": "550px"
    },
    caravanGif: {
      width: "100%",
      borderRadius: "5px",
      border: "1px solid black",
      "max-width": "550px"
    },
    caravanImg: {
      height: "100%",
      borderRadius: "20px",
      border: "1px solid black",
      "max-height": "400px"
    }
  })
);

// {
//     company: "UWaterloo",
//     position: "Engineering Capstone Project",
//     location: "Waterloo, ON",
//     date: "May 2018 - Apr 2019",
//     description: (
//       <Typography
//         variant={screenSmallerThanSm ? "subtitle2" : "h5"}
//         className={classes.body}
//       >
//         Q Labs is a data science consultancy start-up. Q Labs consults for
//         Fortune 500 companies to help them make use of their massive amounts
//         of data through machine learning and data science models.
//         <br></br>
//         <br></br>
//         While there I designed and built data pipelines, and machine learning
//         models for our client, a large financial company.
//       </Typography>
//     ),
//     media: (
//       <div style={{ display: "flex" }}>
//         <img
//           alt="caravan-v0-4"
//           title="caravan-v0-4"
//           id="ls_embed_1517015381"
//           src={
//             "https://storage.googleapis.com/yusufkhaled-personalsite-resources/images/caravanv0-0.jpg"
//           }
//           className={classes.caravanImg}
//           style={{ marginRight: 20 }}
//           scrolling="no"
//           allowFullScreen
//         />
//         <img
//           alt="caravan-v0-4"
//           title="caravan-v0-4"
//           id="ls_embed_1517015381"
//           src={
//             "https://storage.googleapis.com/yusufkhaled-personalsite-resources/images/caravanv0-2.jpg"
//           }
//           className={classes.caravanImg}
//           scrolling="no"
//           allowFullScreen
//         />
//       </div>
//     )
//   }

export default function Work(props) {
  const classes = useStyles();

  const screenSmallerThanSm = useMediaQuery(theme.breakpoints.down("xs"));
  const screenSmallerThanMd = useMediaQuery(theme.breakpoints.down("sm"));

  const work = [
    {
      company: "Caravan",
      position: "Co-founder & Full-stack Developer",
      location: "Waterloo, ON",
      date: "June 2019 - Present",
      description: (
        <Typography
          variant={screenSmallerThanSm ? "subtitle2" : "h5"}
          className={classes.body}
        >
          <Link
            href="https://caravanapp.ca"
            className={classes.linkText}
            target={"_blank"}
          >
            Caravan
          </Link>{" "}
          is a site for readers to find and join online book clubs. Caravan is
          part of{" "}
          <Link
            href="https://velocityincubator.com/"
            className={classes.linkText}
            target={"_blank"}
          >
            Velocity
          </Link>
          , UWaterloo's incubator for early-stage start-ups. <br></br>
          <br></br>We launched the site at the end of June, and in 12 weeks
          we've grown to 2000+ users, 35% of whom chat daily. This represents a
          weekly growth rate of 45%!
          <br></br>
          <br></br>
          <span style={{ fontStyle: "italic" }}>
            React, Node.js, Express, MongoDB
          </span>
        </Typography>
      ),
      media: (
        <img
          alt="caravan-v0-4"
          title="caravan-v0-4"
          id="ls_embed_1517015381"
          src="https://storage.googleapis.com/yusufkhaled-personalsite-resources/images/caravan-demo.gif"
          className={classes.caravanGif}
          style={{
            minWidth: screenSmallerThanMd ? 350 : 450,
            minHeight: screenSmallerThanMd ? 200 : 300
          }}
          scrolling="no"
          allowFullScreen
        />
      )
    },
    {
      company: "Q Labs",
      position: "Software Engineer",
      location: "San Francisco, CA",
      date: "Sep 2018 - Dec 2018",
      description: (
        <Typography
          variant={screenSmallerThanSm ? "subtitle2" : "h5"}
          className={classes.body}
        >
          Q Labs is a data science consultancy start-up that works with large
          financial organizations.
          <br></br>
          <br></br>
          While there I designed architecture for an end-to-end data pipeline,
          then implemented it in Python.
          <br></br>
          <br></br>
          <span style={{ fontStyle: "italic" }}>
            Python, PostgreSQL, Docker, Airflow, Thoughtspot
          </span>
        </Typography>
      ),
      media: (
        <img
          alt="Golden gate bridge"
          title="golden-gate"
          id="ls_embed_1517015381"
          src="https://storage.googleapis.com/yusufkhaled-personalsite-resources/images/goldengate.jpg"
          scrolling="no"
          allowFullScreen
          className={classes.image}
          style={{
            minWidth: screenSmallerThanMd ? 300 : 400
          }}
        />
      )
    },
    {
      company: "RBC",
      position: "Data Scientist",
      location: "Toronto, ON",
      date: "Jan 2018 - Apr 2018",
      description: (
        <Typography
          variant={screenSmallerThanSm ? "subtitle2" : "h5"}
          className={classes.body}
        >
          Tasked with leading an NLP research project trying to summarize
          financial news. Researched state-of-the-art NLP methods, then
          implemented a topic modeler using LDA, and an extractive text
          summarization model.
          <br></br>
          <br></br>
          The models I built led to a whole suite of NLP models being developed.
          At its peak, my models were used by 100+ investors on a daily basis.
          RBC also has a patent-pending for the work I did while there.
          <br></br>
          <br></br>
          <span style={{ fontStyle: "italic" }}>
            Python (nltk, spacey, matplotlib), Open AI Gym
          </span>
        </Typography>
      ),
      media: (
        <img
          alt="RBC logo"
          title="rbc-logo"
          id="ls_embed_1517015381"
          src="https://storage.googleapis.com/yusufkhaled-personalsite-resources/images/rbc.png"
          scrolling="no"
          allowFullScreen
          className={classes.image}
          style={{
            minWidth: screenSmallerThanMd ? 300 : 400
          }}
        />
      )
    },
    {
      company: "Castor EDC",
      position: "Technical Product Manager",
      location: "Amsterdam, NL",
      date: "May 2017 - Aug 2017",
      description: (
        <Typography
          variant={screenSmallerThanSm ? "subtitle2" : "h5"}
          className={classes.body}
        >
          Castor EDC is a Dutch health-tech startup building tools for medical
          research.
          <br></br>
          <br></br>
          As PM, I helped manage the development efforts of a team of six
          engineers. I also built a simulated clinical trial using R to validate
          a new randomization algorithm.
          <br></br>
          <br></br>
          <span style={{ fontStyle: "italic" }}>R, JIRA, Balsamiq</span>
        </Typography>
      ),
      media: (
        <img
          alt="RBC logo"
          title="rbc-logo"
          id="ls_embed_1517015381"
          src="https://storage.googleapis.com/yusufkhaled-personalsite-resources/images/amsterdam.jpeg"
          scrolling="no"
          allowFullScreen
          className={classes.image}
          style={{
            minWidth: screenSmallerThanMd ? 300 : 400
          }}
        />
      )
    },
    {
      company: "Sun Life",
      position: "Web Application Developer",
      location: "Waterloo, ON",
      date: "Sep 2016 - Dec 2016",
      description: (
        <Typography
          variant={screenSmallerThanSm ? "subtitle2" : "h5"}
          className={classes.body}
        >
          I worked as a developer on the innovation team at Sun Life. We were
          responsible for building POCs of interesting new ideas.
          <br></br>
          <br></br>My project for the term was a web-based customer support
          chatbot. I presented to over ten VP's across multiple departments, and
          iterated based off their feedback.
          <br></br>
          <br></br>
          <span style={{ fontStyle: "italic" }}>
            HTML, CSS, Javascript, Dialogflow
          </span>
        </Typography>
      ),
      media: (
        <img
          alt="Sun Life logo"
          title="sun-life-logo"
          id="ls_embed_1517015381"
          //src="https://storage.googleapis.com/yusufkhaled-personalsite-resources/images/sunlife.jpg"
          src="https://storage.googleapis.com/yusufkhaled-personalsite-resources/images/sunlife.png"
          scrolling="no"
          allowFullScreen
          className={classes.image}
          style={{
            minWidth: screenSmallerThanMd ? 300 : 400
          }}
        />
      )
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.container} maxWidth="lg">
        <Typography
          variant={screenSmallerThanSm ? "h4" : "h3"}
          color="inherit"
          className={classes.boldText}
          style={{
            paddingBottom: screenSmallerThanSm ? 20 : 60,
            paddingTop: 30
          }}
        >
          Recent Work Experience
        </Typography>
        {work.map(w => (
          <div
            className={classes.sectionContainer}
            style={{
              flexDirection: screenSmallerThanMd ? "column-reverse" : "row"
            }}
            key={w.company + w.position}
          >
            <div className={classes.textContainer}>
              <Typography
                variant={screenSmallerThanSm ? "h5" : "h4"}
                className={classes.boldText}
              >
                {w.company} -&ensp;{w.position}
              </Typography>
              <Typography
                variant={screenSmallerThanSm ? "subtitle2" : "h6"}
                className={classes.body}
                style={{ fontWeight: 600 }}
              >
                {w.location}&ensp;•&ensp;{w.date}
              </Typography>
              <br></br>
              {w.description}
            </div>
            <div className={classes.imageContainer}>{w.media}</div>
          </div>
        ))}
      </Container>
    </ThemeProvider>
  );
}
