import React, { useState } from "react";
import "./Table.css";

const Table = ({ starList }, props) => {
  const [searchValue, SetSearchValue] = useState("");

  const filterProducts = props.products.filter((product) => {
    return product.includes(searchValue);
  });

  return (
    <div>
      <input type="text" value={searchValue} onChange={SetSearchValue} />
      <table className="table">
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
            filterProducts.map((droplet, index) => {
              return (
                <tr key={index}>
                  <td>{droplet.name}</td>
                  <td>{droplet.birth_year}</td>
                  <td>{droplet.height}</td>
                  <td>{droplet.mass}</td>
                  <td>{droplet.eye_color}</td>
                  <td>{droplet.gender}</td>
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
