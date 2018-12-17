import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import fetchingGemReducer from "./rubyReducer";
import { combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { reduxFirestore, getFirestore } from "redux-firestore";
import {
  reactReduxFirebase,
  getFirebase,
  firebaseReducer
} from "react-redux-firebase";
import fbConfig from "../../config/fbConfig";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  ruby: fetchingGemReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

//firebaseReducer will sync our auth status on firebase with our redux app on the state and pop it on the firebase object on the state
export const middleware = compose(
  applyMiddleware(
    logger,
    thunkMiddleware.withExtraArgument({ getFirebase, getFirestore })
  ),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig, { attachAuthIsReady: true })
);

export default rootReducer;
