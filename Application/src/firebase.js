import firebase from "firebase/app"
import "firebase/auth"

  export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBG3jz1z32hlx1FTCGsYKsX6noHNDsCJPs",
    authDomain: "aicte-11974.firebaseapp.com",
    projectId: "aicte-11974",
    storageBucket: "aicte-11974.appspot.com",
    messagingSenderId: "1081461906347",
    appId: "1:1081461906347:web:806c58c2c9b16b2443d0ee"
  }).auth()
  