import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "../../config/fbConfig";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
});
export const middleware = compose(
  applyMiddleware(
    logger,
    thunkMiddleware.withExtraArgument({ getFirebase, getFirestore })
  ),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig)
);

export default rootReducer;
