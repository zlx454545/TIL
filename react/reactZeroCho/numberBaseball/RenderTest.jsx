import React, { PureComponent } from "react";

// 3.PureComponent는 shouldComponentUpdate를 자동적으로 구현한
// 컴포넌트로 이해할 수 있음
class Test extends PureComponent {
  state = {
    counter: 0,
    string: "hello",
    number: 1,
    boolean: true,
    // 4. ??? 다만 이런 참조를 하는 자료형의 경우 컴포넌트가 바뀐걸 인식하지 못함.
    // 메모리 상에서 기본 자료형과 객체의 차이점인데 정확히 기억이 안난다. 복습하자.
    object: {},
    array: [],
  };

  //   //2. 따라서 다음과 같은 함수로 rendering을 다시 할 상황을 지정해줌
  //   shouldComponentUpdate(nextProps, nextState, nextContext) {
  //     if (this.state.counter !== nextState.counter) {
  //       return true;
  //     }
  //     return false;
  //   }

  // 1. react에서 state의 변화가 없더라도 rendering이 계속 발생함
  onClick = () => {
    // const array = this.state.array;
    // array.push(1);
    this.setState({
      // 5. 따라서 아래와 같이 불변성을 위반하지 말고
      // array: array,
      // 6. 새로운 주소를 가르킬 수 있도록 할 것.
      array: [...this.state.array, 1],
    });
  };

  render() {
    console.log("렌더링", this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Test;
