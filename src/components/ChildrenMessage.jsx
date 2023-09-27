import React from 'react';

// propsで条件を渡して、動的に変わるようにする
// 引数名はなんでもいいが、propsが一般的
const ChildrenMessage = (props) => {
  const contentStyle = {
    color: props.color, // propsで受け取ったcolorを使う
    fontSize: '18px'
  };

  return (
    <>
      {/* <ChildrenMessage>aaa</ChildrenMessage>と書いたら<p>aaa</p>が出力される */}
      <p style={contentStyle}>{props.children}</p>
    </>
  );
}

export default ChildrenMessage;
