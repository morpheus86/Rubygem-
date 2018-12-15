import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase

var config = {
  apiKey: process.env.REACT_APP_API,
  authDomain: "boilerplate-845c7.firebaseapp.com",
  databaseURL: "https://boilerplate-845c7.firebaseio.com",
  projectId: "boilerplate-845c7",
  storageBucket: "boilerplate-845c7.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSENGER
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
