import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase

var config = {
  apiKey: "AIzaSyCbicDKt1r_pkdWOS756fwM6UwBXNNDjsk",
  authDomain: "boilerplate-845c7.firebaseapp.com",
  databaseURL: "https://boilerplate-845c7.firebaseio.com",
  projectId: "boilerplate-845c7",
  storageBucket: "boilerplate-845c7.appspot.com",
  messagingSenderId: "1036506062646"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
