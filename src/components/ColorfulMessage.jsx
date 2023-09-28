import React from 'react';

// propsで条件を渡して、動的に変わるようにする
// 引数名はなんでもいいが、propsが一般的
const ColorfulMessage = (props) => {
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

export default ColorfulMessage;
