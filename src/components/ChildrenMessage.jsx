import React from 'react';

// propsで条件を渡して、動的に変わるようにする
// 引数名はなんでもいいが、propsが一般的
const ChildrenMessage = (props) => {
  // 何度もpropsと書くのは面倒なので、分割代入を使う
  const { color, children } = props;
  const contentStyle = {
    color, // プロパティ名と変数名が同じなら、color: colorと書かなくても良い
    fontSize: '18px'
  };

  return (
    <>
      {/* <ChildrenMessage>aaa</ChildrenMessage>と書いたら<p>aaa</p>が出力される */}
      <p style={contentStyle}>{children}</p>
    </>
  );
}

export default ChildrenMessage;
