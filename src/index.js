import React from 'react'; // reactを使うには必ずimportする必要がある
// import ReactDom from 'react-dom'; // react-domはreact18ではサポートされていない
import { createRoot } from 'react-dom/client'; // react18からはcreateRootを使う
import App from './App';

// react18に関して ref: https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
const container = document.getElementById("root");
const root = createRoot(container);
// index.htmlのidがrootの箇所にAppを反映させる
// App.jsで定義したAppコンポーネントを使う
root.render(<App tab="home" />);
