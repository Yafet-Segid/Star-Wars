import React, { useState } from "react";
import "./Table.css";

const Table = ({ starList }) => {
  const [searchValue, SetSearchValue] = useState("");

  return (
    <div className="table">
      <input
        type="text"
        class="form-control"
        placeholder=" Search name"
        value={searchValue}
        onChange={(event) => {
          SetSearchValue(event.target.value);
        }}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth date</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Home World</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {starList.length > 0 ? (
            starList
              .filter((droplet) => {
                if (searchValue == "") {
                  return droplet;
                } else if (
                  droplet.name.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return droplet;
                }
              })
              .map((droplet, index) => {
                return (
                  <tr key={index}>
                    <td>{droplet.name}</td>
                    <td>{droplet.birth_year}</td>
                    <td>{droplet.height}</td>
                    <td>{droplet.mass}</td>
                    <td>{droplet.homeworld}</td>
                    <td>{droplet.species}</td>
                  </tr>
                );
              })
          ) : (
            <tr>
              <td colSpan="6">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
