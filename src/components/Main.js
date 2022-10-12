import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
//import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MyPic from "../images/root-img.png";
import PostData from "../data/post.json";

class Main extends Component {
  render() {
    //const data = PostData.JSON
    console.log(PostData);
    return (
      <>
        <main>
          {/* Hero unit  landing-grid  heroContent  */}
          <div className="heroContent">
            <img
              src={MyPic}
              alt="avatar"
              className="avatar-img"
              align="center"
            />
            <Container maxWidth="sm">
              <h1>Dr. Mehfooz Ullah</h1>
              <h3>Great Grand Father</h3>
              {/*               <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
              >
                Dr. Mehfooz Ullah
              </Typography>
              <Typography
                component="p"
                variant="h6"
                align="center"
                color="textPrimary"
              >
                Great Grand Father
              </Typography> */}
            </Container>

            <Container maxWidth="sm">
              {/* End hero unit */}
              <Grid spacing={4}>
                <div container>
                  {PostData.familyTree.map((postDetail, index) => {
                    return (
                      <div key={index}>
                        <h5 key={index}>{postDetail.name}</h5>
                      </div>
                    );
                  })}

                  <h3 style={{ color: "red" }}>abcddsjdksjds dksjdksdjk</h3>

                  {JSON.stringify(PostData.familyTree, null, 2)}
                </div>
              </Grid>
            </Container>
          </div>
        </main>
      </>
    );
  }
}

export default Main;