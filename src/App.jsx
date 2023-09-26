// ファイルの拡張子を.jsxにすることで、コンポーネントであることがわかりやすくなる
import React from 'react';

// コンポーネントの作成
// コンポーネント名は大文字で始める
// 例えば、AppやHelloWorld等
// コンポーネントは必ずreturn()を返す
// return()の中身は一つのタグで囲わないといけない
const App = () => {
  const onClickButton = () => alert();

  // 変数の中でstyleを定義することもできる
  const contentStyle = {
    color: 'blue',
    fontSize: '18px' // ReactはcssではなくJSなのでキャメルケースで書く
  };
  
  return (
    // JSX記法において、return()の中身は一つのタグで囲わないといけない
    // とはいえ、divタグ等を無駄に使うと必要のないものがレンダリングされる
    // そこで、<React.Fragment></React.Fragment>を使うと良い
    // あるいは、空のタグで囲えば良い
    <>
      {/* 下記のコードで外側の{}はJavaScriptの波括弧で、内側の{}はオブジェクトの波括弧 */}
      {/* cssのプロパティとして扱うには、''で囲って、stringにする必要がある */}
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      {/* 下記のようにして、styleを与えることもできる */}
      <p style={contentStyle}>お元気ですか？</p>
      {/* イベントはキャメルケースで書く ex:onClick */}
      {/* 波括弧の中はJavaScriptの関数を書く */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルでもAppを使えるようにする
export default App;
