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

        <p>testing......geeeee</p>
      </>
    );
  }
}

export default App;
