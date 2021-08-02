const path = require("path");

module.exports = {
  name: "wordrelay-setting", // 큰 의미는 없다.
  mode: "development", // 실서비스: production
  devtool: "eval", // ??빠르게 하겠다는 의미
  resolve: {
    extensions: [".js", ".jsx"], // 확장자를 entry의 app에서 생략돼있을 경우
    // 자동으로 매칭을 시켜준다.
  },
  entry: {
    app: ["./client.jsx"],
  }, // 입력
  output: {
    path: path.join(__dirname, "dist"), // ?? node기능. 경로지정해주는 함수
    filename: "app.js",
  }, // 출력
};
