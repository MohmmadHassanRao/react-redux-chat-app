import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCrpOCc_4u_1e1gJQSFTAM7-zgkAQQxzUk",
  authDomain: "react-redux-chat-app-6f16d.firebaseapp.com",
  databaseURL: "https://react-redux-chat-app-6f16d.firebaseio.com",
  projectId: "react-redux-chat-app-6f16d",
  storageBucket: "react-redux-chat-app-6f16d.appspot.com",
  messagingSenderId: "860595929581",
  appId: "1:860595929581:web:993e6d9eaa161f7fb667e4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
