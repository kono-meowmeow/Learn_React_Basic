// ファイルの拡張子を.jsxにすることで、コンポーネントであることがわかりやすくなる
import React from 'react';
import ColorfulMessage from './components/ColorfulMessage';

// コンポーネントの作成
// コンポーネント名は大文字で始める
// 例えば、AppやHelloWorld等
// コンポーネントは必ずreturn()を返す
// return()の中身は一つのタグで囲わないといけない
// propsはコンポーネントに渡す引数のようなもの
const App = () => {
  const onClickButton = () => alert();

  // 変数の中でstyleを定義することもできる
  const contentStyle = {
    color: 'blue',
    fontSize: '18px' // ReactはcssではなくJSなのでキャメルケースで書く(font-sizeではなくfontSizeと書く)
  };
  // 上記と下記のように、わずかな違いでいちいち変数を定義するのは面倒
  // そこで、propsを使うと良い
  const contentLedyStyle = {
    color: 'pink',
    fontSize: '18px'
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
      {/* 下記のcolorとmessageがprops */}
      <ColorfulMessage color="black" message="お元気ですか〜w" />
      <p style={contentLedyStyle}>元気です！</p>
      {/* こちらもpropsを使って書いてみる */}
      <ColorfulMessage color="red" message="元気です〜w" />
      {/* イベントはキャメルケースで書く ex:onClick */}
      {/* 波括弧の中はJavaScriptの関数を書く */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルでもAppを使えるようにする
export default App;
