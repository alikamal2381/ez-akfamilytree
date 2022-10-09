import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MyPic from "../images/root-img.png";
import PostData from "../data/post.json";

class Main extends Component {
  render() {
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
            {
            /* <Container maxWidth="sm">
              <h1>Dr. Mehfooz Ullah</h1>
              <h3>Great Grand Father</h3>
            </Container>
            */ }

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

                  {/*JSON.stringify(PostData.familyTree, null, 2)*/}
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
