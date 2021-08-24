import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Header from "./contenet/Header"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }

  async getUsersDate() {
    const res = await axios.get( "https://swapi.dev/api/people/1/");
    this.setState({ loading: false, user: res.data });
  }
  componentDidMount() {
    this.getUsersDate();
  }
  render() {
    const columns = [
      {
        Header: "Name",
        accessor: "name",
      },

      {
        Header: "Birthday",
        accessor: "birth_year",
      },
      {
        Header: "Height",
        accessor: "height",
      },
      {
        Header: "Weight",
        accessor: "mass",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Eye Color",
        accessor: "eye_color",
      },
    ];
    return
    <div> 
    <Header />
    <ReactTable data={this.state.users} columns={columns} />;
    </div>
  }
}
