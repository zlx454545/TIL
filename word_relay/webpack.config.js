const path = require("path");

module.exports = {
  name: "wordrelay-setting", // 큰 의미는 없다.
  mode: "development", // 실서비스: production
  devtool: "eval", // ??빠르게 하겠다는 의미
  resolve: {
    // 확장자를 entry의 app에서 생략돼있을 경우
    // 자동으로 매칭을 시켜준다.
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/, // ?? 정규표현식
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"), // ?? node기능. 경로지정해주는 함수
    filename: "app.js",
  }, // 출력
};
