import firebase from 'firebase/app';

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCNYvE6_hFHOUL6IX3my1VXW5-ySxIj3co",
  authDomain: "ecv-firebase-189.firebaseapp.com",
  databaseURL: "https://ecv-firebase-189.firebaseio.com",
  projectId: "ecv-firebase-189",
  storageBucket: "ecv-firebase-189.appspot.com",
  messagingSenderId: "806586224653",
  appId: "1:806586224653:web:7593f6bac23c7e0a7c8544"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

export default{
  auth,
  firebase,
  db
};
