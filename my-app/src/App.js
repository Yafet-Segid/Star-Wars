import React, { Component } from "react";
import Header from "./Header/Header";
import Table from "./Table/Table";
import Button from "./Button/Next";
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

  render() {
    return (
      <div>
        <Header />
        <Table starList={this.state.starList} />
        <Button />
      </div>
    );
  }
}

export default App;
