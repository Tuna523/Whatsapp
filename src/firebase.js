import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmS6P9uYB4CreRt88hqtzVWH3hbjsO3MQ",
  authDomain: "whats-app-clone-90dac.firebaseapp.com",
  projectId: "whats-app-clone-90dac",
  storageBucket: "whats-app-clone-90dac.appspot.com",
  messagingSenderId: "534850513282",
  appId: "1:534850513282:web:53cd26bb2110bfe674879b",
  measurementId: "G-ZJDTJ33F1F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;