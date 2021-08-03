const React = require("react");

const NumberBaseball = () => {
  return <h1>hi baseball!</h1>;
};

module.exports = NumberBaseball;

// export const hello = 'hello'  // import {hello}

// export default NumberBaseball // import NumberBaseball
// moudle.exports = NumberBaseball // const anything = require("./NumberBaseball")
// 이 둘이 다른 개념 다만 리액트에서 호환된다는 정도로만 이해

////// es2015 모듈문법
// export, import

////// common js 모듈문법(노드에서 사용 : 웹팩에선 항상 이 문법 사용해야함
//                        why? 웹팩은 노드로 돌아감, 다만 jsx에서 import, export
//                        사용 가능한 이유는 웹팩의 바벨이 common js로 변환해줌)
// const React = require('react');

// exprots.hello = "hello";
// module.exports = NumberBaseball

// exports.hello = 'a'
// module.exports = {hello : 'a'}
