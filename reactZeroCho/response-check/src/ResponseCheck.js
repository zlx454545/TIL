import { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작하세요",
    result: [],
  };

  onClickScreen = () => {};

  // jsx 안에서는 조건문을 쓰지 않는다.
  render() {
    return (
      <>
        <div
          id="screen"
          className={this.state.state}
          onClick={this.onClickScreen}
        >
          {this.state.message}
        </div>
        <div>
          평균 시간:{" "}
          {this.state.result.reduce((acc, el) => acc + el, 0) /
            this.state.result.length}
          ms
        </div>
      </>
    );
  }
}

export default ResponseCheck;
