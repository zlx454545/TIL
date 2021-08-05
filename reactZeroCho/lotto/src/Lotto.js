import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Ball from "./Ball";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => {
      return i + 1;
    });
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((a, b) => a - b);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  // useMemo를 쉽게 설명하면.. useMemo의 첫번째 인자의 값을 기억한다.
  // until... 두번째 인자가 바뀌기 전까지
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  // useEffect는 componentDidMount때 항상 실행되고,
  // 두번째 인자가 바뀔때마다 항상 실행된다. (componentDidUpdate)
  useEffect(() => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 400);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 2800);

    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]);

  // useCallback은 함수를 기억한다.
  // until 두번째 인자가 값이 변할때까지
  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
};

// class Lotto extends Component {
//   state = {
//     winNumbers: getWinNumbers(),
//     winBalls: [],
//     bonus: null,
//     redo: false,
//   };

//   timeouts = [];

// runTimeouts = () => {
//   const { winNumbers } = this.state;
//   for (let i = 0; i < winNumbers.length - 1; i++) {
//     this.timeouts[i] = setTimeout(() => {
//       this.setState((prevState) => {
//         return {
//           winBalls: [...prevState.winBalls, winNumbers[i]],
//         };
//       });
//     }, (i + 1) * 400);
//   }
//   this.timeouts[6] = setTimeout(() => {
//     this.setState({
//       bonus: winNumbers[6],
//       redo: true,
//     });
//   }, 2800);
// };

//   componentDidMount() {
//     this.runTimeouts();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.winBalls.length === 0) {
//       this.runTimeouts();
//     }
//   }

//   componentWillUnmount() {
//     this.timeouts.forEach((el) => {
//       clearTimeout(el);
//     });
//   }

//   onClickRedo = () => {
//     this.setState({
//       winNumbers: getWinNumbers(),
//       winBalls: [],
//       bonus: null,
//       redo: false,
//     });
//     this.timeouts = [];
//   };

//   render() {
//     return (
//       <>
//         <div>당첨 숫자</div>
//         <div id="결과창">
//           {this.state.winBalls.map((v) => (
//             <Ball key={v} number={v} />
//           ))}
//         </div>
//         <div>보너스!</div>
//         {this.state.bonus && <Ball number={this.state.bonus} />}
//         {this.state.redo && (
//           <button onClick={this.onClickRedo}>한 번 더!</button>
//         )}
//       </>
//     );
//   }
// }

export default Lotto;
