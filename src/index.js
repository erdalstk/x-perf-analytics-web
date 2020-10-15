import React from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryDevtools } from "react-query-devtools";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const isDev = process.env.NODE_ENV === 'development';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {isDev ? <ReactQueryDevtools /> : null}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
