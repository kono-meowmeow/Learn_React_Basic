import React from 'react';

// propsで条件を渡して、動的に変わるようにする
// 引数名はなんでもいいが、propsが一般的
// 下記の書き方でもexportできる
// exportを使うと、import時にexportする関数と同じ名前でimportしないといけない
// したがって、import時にtypoをするとエラーになる
export const ColorfulMessage = (props) => {
  // 親コンポーネントが再レンダリングされると、子コンポーネントも再レンダリングされる
  // App.jsxが再レンダリングされるたびに、ColorfulMessage.jsxも再レンダリングされる
  // 再レンダリングされると、下記のconsole.logが表示される
  console.log("カラフル");
  const contentStyle = {
    color: props.color, // propsで受け取ったcolorを使う
    fontSize: '18px'
  };

  return (
    <>
      {/* propsで受け取ったmessageを表示する */}
      {/* returnの中なので、JSを使うときは波括弧で囲む */}
      <p style={contentStyle}>{props.message}</p>
    </>
  );
}

// 下記のように書くと、import時に{}をつけなくても良くなる(default export)
// default exportは、import時にimportする関数に任意の名前をつけられる
// ただし、default exportは1ファイルに1つしか書けない
// export default ColorfulMessage;
