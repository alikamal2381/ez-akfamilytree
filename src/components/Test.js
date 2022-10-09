import React, { Component } from "react";
import PostData from "../data/post.json";

class Test extends Component {
  render() {
    console.log(PostData);

    return (
      <>
        <h3>Working with JSON file</h3>
        {PostData.familyTree.map((postDetail, index) => {
          return <h1 key={index}>{postDetail.name}</h1>;
        })}
      </>
    );
  }
}

export default Test;
