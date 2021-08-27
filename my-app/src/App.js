import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Table from "./Table/Table";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Table />
        {/* <img className="App" src="./image/star-wars.jpg" /> */}
      </div>
    );
  }
}

export default App;
