// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const ButtonText = [10, "there"];
  const text = "이름을 입력하세요 : ";
  const style = { background: "blue", color: "white" };
  return (
    <div>
      <label className="label" htmlFor="name">
        {text}
      </label>
      <input id="name" />
      <button style={style}>{ButtonText}</button>
    </div>
  );
};

// Take the react component and show it non the screen
ReactDOM.render(<App />, document.querySelector("#root"));
