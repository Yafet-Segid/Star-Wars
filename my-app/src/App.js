import React, { Component } from "react";
import Header from "./Header/Header";
import Table from "./Table/Table";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starList: [],
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ starList: data.results });
      });
  }

  // const style = {
  //   position: 'center',
  //   textAlign: 'center',
  //   // min-width: 100%;
  //   // min-height: 100%;
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   // backgroundSize: 100px;
  // };

  render() {
    return (
      <div>
        <Header />
        {/* <Search products={starList} /> */}
        <Table starList={this.state.starList} products={starList} />
      </div>
    );
  }
}

export default App;
