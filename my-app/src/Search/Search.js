import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, SetSearchValue] = useState("");

  const inputChange = () => {};

  const filterProducts = props.products.filter((product) => {
    return product.includes(searchValue);
  });

  return (
    <div>
     
    </div>
  );
};

export default Search;
