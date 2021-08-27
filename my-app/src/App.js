import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Table from "./Table/Table";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StarList: [],
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/planets")
      .then((res) => res.json())
      .then((json) => json.starList)
      .then((starList) => this.setState({ starList: starList }));
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Table starList={this.state.starList} />
        {/* <img className="App" src="./image/star-wars.jpg" /> */}
      </div>
    );
  }
}

export default App;
