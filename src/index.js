import React from 'react'; // reactを使うには必ずimportする必要がある
import ReactDom from 'react-dom';
import App from './App';

// index.htmlのidがrootの箇所にAppを反映させる
// App.jsで定義したAppコンポーネントを使う
ReactDom.render(<App />, document.getElementById("root"));
