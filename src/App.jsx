// ファイルの拡張子を.jsxにすることで、コンポーネントであることがわかりやすくなる
import React from 'react';

// コンポーネントの作成
// コンポーネント名は大文字で始める
// 例えば、AppやHelloWorld等
// コンポーネントは必ずreturn()を返す
// return()の中身は一つのタグで囲わないといけない
const App = () => {
  return (
    // JSX記法において、return()の中身は一つのタグで囲わないといけない
    // とはいえ、divタグ等を無駄に使うと必要のないものがレンダリングされる
    // そこで、<React.Fragment></React.Fragment>を使うと良い
    // あるいは、空のタグで囲えば良い
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

// 他のファイルでもAppを使えるようにする
export default App;
