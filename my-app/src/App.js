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
      .then((json) => json.StarList)
      .then((StarList) => this.setState({ StarList: StarList }));
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Table StarList={this.state.StarList} />
        {/* <img className="App" src="./image/star-wars.jpg" /> */}
      </div>
    );
  }
}

export default App;
