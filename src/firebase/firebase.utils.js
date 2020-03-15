import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwbl8gKYTZYBJl9WmDAxt6DqyOOuVaWck",
  authDomain: "shop-db-a5988.firebaseapp.com",
  databaseURL: "https://shop-db-a5988.firebaseio.com",
  projectId: "shop-db-a5988",
  storageBucket: "shop-db-a5988.appspot.com",
  messagingSenderId: "904034726856",
  appId: "1:904034726856:web:b30758d9682158b7d946fd"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
