import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
