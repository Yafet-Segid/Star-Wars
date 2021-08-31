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

  async componentDidMount() {
    const characters = await fetch("https://swapi.dev/api/people");
    const response = await characters.json();

    // homeworld
    for (const character of response.results) {
      const homeworld = character.homeworld;
      const homeworldResponse = await fetch(homeworld).then((res) =>
        res.json()
      );
      character.homeworld = homeworldResponse.name;

  // species
      for (const race of response.results) {
        const species = race.species;
        const specieResponse = await fetch(species).then((resp) => resp.json());
        race.species = specieResponse.name;
      }
      this.setState({ starList: response.results });
      // console.log(race);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Table starList={this.state.starList} />
      </div>
    );
  }
}

export default App;
