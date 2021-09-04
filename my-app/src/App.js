import React, { Component } from "react";
import Header from "./Header/Header";
import Table from "./Table/Table";
import Pagination from "./Button/Pagination";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      starList: [],
      // dataToShow: response.slice(0, 9),
    };
    // this.getPages = this.getPages.bind(this);
  }
  async componentDidMount() {
    const characters = await fetch("https://swapi.dev/api/people");
    const response = await characters.json();

    // species

    for (const race of response.results) {
      if (race.species.length === 0) {
        race.species = "Human";
      } else {
        const species = race.species;
        const specieResponse = await fetch(species).then((resp) => resp.json());
        race.species = specieResponse.name;
      }
    }

    // homeworld
    for (const character of response.results) {
      const homeworld = character.homeworld;
      const homeworldResponse = await fetch(homeworld).then((res) =>
        res.json()
      );
      character.homeworld = homeworldResponse.name;

      this.setState({ starList: response.results });
    }
  }

  // Change page
  getPages(event) {
    // const { data, pageSize } = this.state;
    this.setState({
      currentPage: number(event.target.id),
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Table starList={this.state.starList} />
        <Pagination getPages={this.getPages} />
      </div>
    );
  }
}

export default App;
