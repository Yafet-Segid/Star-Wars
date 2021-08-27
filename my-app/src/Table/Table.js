import React, { Component } from "react";
import "./Table.css";

const Table = ({ starList }) => {
  return (
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
          starList.results.map((droplet, index) => {
            return (
              <tr key={index}>
                <td>{droplet.name}</td>
                <td>{droplet.rotation_period}</td>
                <td>{droplet.diameter}</td>
                <td>{droplet.climate}</td>
                <td>{droplet.terrain}</td>
                <td>{droplet.surface_water}</td>
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
  );
};

export default Table;
