import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  //in our state of the store we will have the authReducer property update info on the auth property
  //the projectReducer update info on the project property inside the state object
  project: projectReducer
});

export default rootReducer;
