const React = require("react");
const Try = require("./Try");

// this를 안쓰는 경우엔 class 밖으로 함수 빼서 사용
// 다른 곳에서도 사용할 가능성 있기 때문
function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1);
    array.push(chosen[0]);
  }
  return array;
}

class NumberBaseball extends React.Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join("")) {
      this.setState({
        result: "홈런!",
        // 불변성 때문에 this.state.tries.push() 이런식으로 하면 안됨.
        // 참조가 달라져야 함.
        // tries === tries가 되버리기 때문에..
        tries: [
          ...this.state.tries,
          { try: this.state.value, result: "홈런!" },
        ],
      });
      alert("게임을 다시 시작합니다!");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      const answerArray = this.state.value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        this.setState({
          result: `10번 초과! 답은 ${this.state.answer.join("")}이었습니다.`,
        });
        alert("게임을 다시 시작합니다!");
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [
            ...this.state.tries,
            {
              try: this.state.value,
              result: `${strike}스트라이크 ${ball}볼 입니다.`,
            },
          ],
        });
      }
    }
  };

  onChangeInput = (e) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            // 이렇게 파일을 분리할 경우 props가 필요해짐
            // props가 생기면서 부모자식 관계 형성
            // 부모 컴포넌트가 자식 컴포넌트에게 props를 물려줌
            // 이런 부모 자식 관계가 깊어지면 redux mobx context등을 사용하여 관리
            return <Try key={`${i + 1}번째 시도`} tryInfo={v} index={i} />;
          })}
        </ul>
      </>
    );
  }
}

module.exports = NumberBaseball;

//////////// react에서 주석 처리법
{
  /* why? jsx에서 {}를 통해 js문법 삽입
그 안에 js 블록 단위 주석.. 당연한 문법*/
}

//////////// module과 require 차이점

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
