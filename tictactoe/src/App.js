import React, { useReducer, useState } from "react";
import Table from "./Table";

const initi


const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [winner, setWinner] = useState("");
  // const [turn, setTurn] = useState("0");
  // const [tableData, setTableData] = useState([
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""],
  // ]);

  return (
    <>
      <Table />
      {winner && <div>{winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;
