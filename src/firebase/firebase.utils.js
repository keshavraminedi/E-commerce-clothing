import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



const config={
    apiKey: "AIzaSyCS1sSrGdjL0a3evfi4Zqf05QNTl8ZloBE",
    authDomain: "clothingdb-43337.firebaseapp.com",
    databaseURL: "https://clothingdb-43337.firebaseio.com",
    projectId: "clothingdb-43337",
    storageBucket: "clothingdb-43337.appspot.com",
    messagingSenderId: "1019605998037",
    appId: "1:1019605998037:web:51aba5a6ee01872a20455c",
    measurementId: "G-FRB3KY6YCD"
  };
  firebase.initializeApp(config);
  export const auth =firebase.auth();
  export const firestore= firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);
  export default firebase;