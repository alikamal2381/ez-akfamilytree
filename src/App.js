import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
//import Test from "./components/Test";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />

        {/* <Test /> */}
      </>
    );
  }
}

export default App;
