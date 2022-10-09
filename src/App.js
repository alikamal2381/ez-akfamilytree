import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        {/* <p>This is test paragraph...</p> */}
        <Header />
        <Main />
        <Footer />

        <p>othererer kldksldks kldskd sdkks d</p>
        <h3>I love you</h3>
      </>
    );
  }
}

export default App;
