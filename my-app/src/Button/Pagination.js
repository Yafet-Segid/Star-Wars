import React from "react";
import "./Next.css";

const Pagination = ({ getPages }) => {
  const pages = [];

  for (let i = 1; i <= 9; i++) {
    pages.push(i);
  }

  const paginate = pages.map((page) => (
    <button key={page} onClick={() => getPages(page)} className="button">
      {page}
    </button>
  ));
  return <div>{paginate}</div>;
};

export default Pagination;
