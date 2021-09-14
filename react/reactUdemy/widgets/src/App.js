import React, { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdwon from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "what is React?",
    content: "react is a front end javascript framework",
  },
  {
    title: "나는 잘생겼어",
    content: "나는 정말정말 잘생겼어~!",
  },
  {
    title: "어떻게하면 리액트 앱을 생성?",
    content: "cra를 이용하면 편해~",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
  {
    label: "The color Green",
    value: "green",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown && (
        <Dropdwon
        label = "select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      )} */}
      <Translate />
    </div>
  );
};
