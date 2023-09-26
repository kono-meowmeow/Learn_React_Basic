import React from 'react'; // reactを使うには必ずimportする必要がある
import ReactDom from 'react-dom';

const App = () => {
  return (
    // JSX記法において、return()の中身は一つのタグで囲わないといけない
    // とはいえ、divタグ等を無駄に使うと必要のないものがレンダリングされる
    // そこで、React.Fragmentを使うと良い
    // あるいは、空のタグで囲えば良い
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

// index.htmlのidがrootの箇所にAPPを反映させる
ReactDom.render(<App />, document.getElementById("root"));
