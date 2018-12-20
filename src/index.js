import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import rootReducer from "./store/reducer/rootReducer";
import { middleware } from "./store/reducer/rootReducer";
import { Provider } from "react-redux";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["auth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById("root")
  );
});

serviceWorker.unregister();
