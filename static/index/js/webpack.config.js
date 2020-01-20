// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require("path");

module.exports = {
  // モードの設定
  mode: "development",
  // エントリーポイントの設定
  entry: {
    bundle: [
      "./webpack/_base.js", "./webpack/index.js"
    ],
  },
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: "[name].js",
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, "./")
  }
};
