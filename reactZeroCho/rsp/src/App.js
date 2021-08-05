import React, { Component } from "react";

// 클래스의 경우  -> constructor -> render -> ref -> componentDidmount
// -> (setState/props바뀔때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모나가 나를 없앴을때 -> componentWillUnmount -> 소멸

const rspCoords = {
  rock: "0px",
  scissor: "-142px",
  paper: "-284px",
};

const scores = {
  rock: 1,
  scissor: 0,
  paper: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

class RSP extends Component {
  state = {
    result: "",
    imgCoord: "0px",
    score: 0,
  };

  interval;

  // 컴포넌트 첫 렌더링 후 -> 비동기 요청을 많이함
  componentDidMount() {
    this.interval = setInterval(this.changeHand, 100);
  }

  // 컴포넌트가 제거되기 직전 -> 비동기 요청 정리를 많이함
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeHand = () => {
    const { imgCoord } = this.state;
    if (imgCoord === rspCoords.rock) {
      this.setState({ imgCoord: rspCoords.scissor });
    } else if (imgCoord === rspCoords.scissor) {
      this.setState({ imgCoord: rspCoords.paper });
    } else if (imgCoord === rspCoords.paper) {
      this.setState({ imgCoord: rspCoords.rock });
    }
  };

  // 고차함수 패턴
  onClickBtn = (choice) => () => {
    clearInterval(this.interval);
    const { imgCoord } = this.state;
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = cpuScore - myScore;
    if (diff === 0) {
      this.setState({
        result: "비겼습니다.",
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: "이겼습니다.",
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: "졌습니다.",
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => (this.interval = setInterval(this.changeHand, 100)), 2000);
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn("rock")}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={this.onClickBtn("scissor")}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn("paper")}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;
