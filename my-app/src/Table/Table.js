import React, { Component } from "react";
import "./Table.css";

const Table = ({ StarList }) => {
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
        {StarList.length > 0 ? (
          StarList.map((droplet, index) => {
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
            <td colSpan="5">Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
