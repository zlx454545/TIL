const React = require("react");
const ReactDom = require("react-dom");
const NumberBaseball = require("./NumberBaseball");
const { default: Test } = require("./RenderTest");

ReactDom.render(<Test />, document.querySelector("#root"));
