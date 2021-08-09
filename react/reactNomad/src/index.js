import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Component란 html을 반환하는 함수
// 하나의 component만 rendering 할 수 있음
// Component에 정보를 보낼 수 있음 => props
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
