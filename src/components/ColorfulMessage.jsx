import React from 'react';

// propsで条件を渡して、動的に変わるようにする
// 引数名はなんでもいいが、propsが一般的
const ColorfulMessage = (props) => {
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
