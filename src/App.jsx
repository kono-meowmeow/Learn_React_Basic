// ファイルの拡張子を.jsxにすることで、コンポーネントであることがわかりやすくなる
import React, { useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';
import ChildrenMessage from './components/ChildrenMessage';

// コンポーネントの作成
// コンポーネント名は大文字で始める
// 例えば、AppやHelloWorld等
// コンポーネントは必ずreturn()を返す
// return()の中身は一つのタグで囲わないといけない
// propsはコンポーネントに渡す引数のようなもの
// stateは各コンポーネントが持つ状態のようなもの。stateが変わると、コンポーネントが再レンダリングされる
const App = () => {
  // stateの定義
  // useState()の中には初期値を入れる
  // useState()は配列を返す
  // その配列の1つ目の要素はstateの値(変数)
  // その配列の2つ目の要素はstateを変更する関数(更新関数)
  // その配列の2つ目の要素は、「set一つ目の変数名」という名前にするのが一般的
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  // クリックされたらnumが1増える関数
  const onClickCountUp = () => {
    // numの値を1増やす
    setNum(num + 1);
  };

  // クリックされたらtrue/falseが切り替わる関数
  const onClickSwitchShowFlag = () => {
    // 現在のstateの逆の値を返すことで、true/falseを切り替える
    setFaceShowFlag(!faceShowFlag);
  };

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
      <p style={contentLedyStyle}>元気です！</p>
      <hr />
      {/* 下記のcolorとmessageがprops */}
      <ColorfulMessage color="black" message="お元気ですか〜w" />
      <ColorfulMessage color="red" message="元気です〜w" />
      <hr />
      {/* ちょっと応用的なpropsの渡し方 */}
      {/* props.childrenを使って、文章を渡す */}
      <ChildrenMessage color="green">
        元気ですか？笑
      </ChildrenMessage>
      <ChildrenMessage color="orange">
        超元気です！笑笑
      </ChildrenMessage>
      <hr />
      {/* イベントはキャメルケースで書く ex:onClick */}
      {/* 波括弧の中はJavaScriptの関数を書く */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <hr />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {/* 下記のようにすると、faceShowFlagがtrueの時だけ表示される */}
      {/* true/falseに応じて表示/非表示を変えるには下記のようにするといい */}
      {/* &&の左の要素がtrueの時に、右を返す */}
      {faceShowFlag && <p>(๑╹ω╹๑ )</p>}
    </>
  );
};

// 他のファイルでもAppを使えるようにする
export default App;
