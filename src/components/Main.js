import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MyPic from "../images/root-img.png";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    // width: "100%",
    // margin: "auto",
    alignItems: "center",
  },
  avatarimg: {
    height: "250px",
    //paddingTop: "5em",
    borderRadius: "50%",
    alignItems: "center",
    alignContent: "center",
  },
  landinggrid: {
    background: "#fc4a1a",
    position: "fixed",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <img
            src={MyPic}
            alt="avatar"
            className={classes.avatarimg}
            align="center"
          />
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Dr. Mehfooz Ullah
            </Typography>

            <Typography
              component="p"
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Great Grand Father
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
          </Container>
        </div>
        <Container className={classes.landinggrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <div alignContent="center" alignItems="center">
              Content Main
            </div>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Main;
