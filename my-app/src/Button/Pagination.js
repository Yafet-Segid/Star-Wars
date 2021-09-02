import React from "react";
import Table from "./Table/Table";
import { usePaginated } from "react-query";
import "./Next.css";

const Pagination = async (key, page) => {
  const characters = await fetch("https://swapi.dev/api/people");
  const response = await characters.json();

  const Planets = () =>{
    const [ page, setPage] = useState(1);
    const {
      resolvedDate,
      latestDate,
      status
    
  } =  usePaginated (['planets', page], Pagination);

  return (
    <div className="container">
      <div>
        <button
          className="prev button"
          onClick={() => setPage((odl) => Math.max(old - 1, 1))}
        >
          Prev
        </button>

        <button
          className="next button"
          onClick={() =>
            setPage((old) => (!latestDate || !latestData.next ? old : old + 1))
          }
        >
          Next
        </button>
      </div>
    </div>
  );


export default Pagination;
