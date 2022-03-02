import React, { Component } from "react";
import Header from "./Header/Header";
import Table from "./Table/Table";
import Pagination from "./Button/Pagination";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starList: [],
    };
    this.getPages = this.getPages.bind(this);
  }
  async componentDidMount() {
    this.fetchCharacters(1);
  }
  fetchCharacters = async (page) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const characters = (await response.json()).results;

    for (const character of characters) {
      const homeworld = character.homeworld;
      const response = await fetch(homeworld);
      character.homeworld = (await response.json()).name;

      if (character.species.length === 0) {
        character.species = "Human";
      } else {
        const speciesURL = character.species[0];
        const response = await fetch(speciesURL);
        const speciesName = (await response.json()).name;
        character.species = speciesName;
      }
    }

    this.setState({ starList: characters });
  };

  getPages(page) {
    this.fetchCharacters(page);
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
