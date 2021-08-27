import React, { useState, useEffect } from "react";
import "./Table.css";

const Table = () => {
  const [nameValue, setNameValue] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((res) => res.json())
      .then((StarList) => {
        const newNameState = StarList.map((product) => {
          return product.name;
        });
        setNameValue(newNameState);
      });
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Birth date</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Home World</th>
          <th>Species</th>
        </tr>
        <tr>
          <td>{nameValue}</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
