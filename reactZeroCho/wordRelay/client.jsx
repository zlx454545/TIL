// 파일 확장자 x를 붙이는 걸로 리액트와 자바스크립트 차이를 여실히 알 수 있음
// 가급적 붙이는게 좋다
const React = require("react");
const ReactDom = require("react-dom");

const WordRelay = require("./wordRelay");

ReactDom.render(<WordRelay />, document.querySelector("#root"));
