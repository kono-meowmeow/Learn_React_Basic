import React from 'react'; // reactを使うには必ずimportする必要がある
import ReactDom from 'react-dom';

const App = () => {
  return <h1>こんにちは！</h1>;
};

// index.htmlのidがrootの箇所にAPPを反映させる
ReactDom.render(<App />, document.getElementById("root"));
