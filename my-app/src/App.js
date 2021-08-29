import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Table from "./Table/Table";
// import Search from "./Search/Search";

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

  render() {
    return (
      <div className="App">
        <Header />
        {/* <Search products={starList} /> */}
        <Table products={starList} starList={this.state.starList} />
        {/* <img className="App" src="./image/star-wars.jpg" /> */}
      </div>
    );
  }
}

export default App;
