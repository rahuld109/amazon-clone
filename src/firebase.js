import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5B3ODfEMxEIVLzijhxsTINKpgzddlGvs",
  authDomain: "clone-f6e4e.firebaseapp.com",
  databaseURL: "https://clone-f6e4e.firebaseio.com",
  projectId: "clone-f6e4e",
  storageBucket: "clone-f6e4e.appspot.com",
  messagingSenderId: "963176999980",
  appId: "1:963176999980:web:f8c4ce2ef13b7f9d7c3589",
  measurementId: "G-438YEBEYX8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
