import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useRef } from "react";

const config = {
  apiKey: "AIzaSyAwbl8gKYTZYBJl9WmDAxt6DqyOOuVaWck",
  authDomain: "shop-db-a5988.firebaseapp.com",
  databaseURL: "https://shop-db-a5988.firebaseio.com",
  projectId: "shop-db-a5988",
  storageBucket: "shop-db-a5988.appspot.com",
  messagingSenderId: "904034726856",
  appId: "1:904034726856:web:b30758d9682158b7d946fd"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
