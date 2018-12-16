import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase

console.log(process.env.NODE_ENV);

var config = {
  apiKey: process.env.REACT_APP_GOOGLE_API,
  authDomain: "boilerplate-845c7.firebaseapp.com",
  databaseURL: "https://boilerplate-845c7.firebaseio.com",
  projectId: "boilerplate-845c7",
  storageBucket: "boilerplate-845c7.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSENGER_API
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
