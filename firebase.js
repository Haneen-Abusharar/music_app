// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkSV9X2Id0Ih0DpGD8IXfe4maaQhS_GsA",
  authDomain: "music-application-bdc7b.firebaseapp.com",
  databaseURL: "https://music-application-bdc7b-default-rtdb.firebaseio.com",
  projectId: "music-application-bdc7b",
  storageBucket: "music-application-bdc7b.appspot.com",
  messagingSenderId: "821102826577",
  appId: "1:821102826577:web:9c1ca3dea3e0c635649470",
  measurementId: "G-Y3853M3W9H"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
!firebase.apps.length
 ? firebase.initializeApp(firebaseConfig).firestore()
: firebase.app().firestore();
var db = firebase.firestore();
export default db