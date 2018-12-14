import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import rootreducer from "./store/reducer/rootReducer";
import { Provider } from "react-redux";
//provider binding layer. alows us to connect react and redux.
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootreducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
