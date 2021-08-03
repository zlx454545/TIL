const React = require("react");

// 7. hooks의 경우는 shouldComponentUpdate메소드도 존재하지 않고
// PureComponenet도 존재하지 않음
// 대신 memo를 사용할 수 있음
// 8. 컴포넌트 위계에서 가장 끝에 위치한 자식의 경우 memo를 사용!
// 자식들의 모두 memo를 사용한 컴포넌트의 경우도 memo 사용가능
const Try = React.memo(({ tryInfo, index }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

// class Try extends React.PureComponent {
//   render() {
//     return (
//       <li>
//         <div>{this.props.tryInfo.try}</div>
//         <div>{this.props.tryInfo.result}</div>
//       </li>
//     );
//   }
// }

module.exports = Try;
