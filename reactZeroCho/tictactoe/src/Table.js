import React from "react";
import Tr from "./Tr";

const Table = ({ onClick, tableData, dispatch }) => {
  return (
    <table onClick={onClick}>
      {Array(tableData.length)
        .fill()
        .map((_, i) => (
          <Tr dispatch={dispatch} rowIndex={i} rowData={tableData[i]}>
            {""}
          </Tr>
        ))}
    </table>
  );
};

export default Table;
