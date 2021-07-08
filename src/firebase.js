import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWQ3geIJWFdPlncTe7mYxo6I0xL-L12ec",
  authDomain: "facebook-clone-c0a10.firebaseapp.com",
  projectId: "facebook-clone-c0a10",
  storageBucket: "facebook-clone-c0a10.appspot.com",
  messagingSenderId: "501396771766",
  appId: "1:501396771766:web:75d26d4c0d4c3b8e77a717",
  measurementId: "G-5SHH2RV9DW",
};

// Connect React FronEnd to Firebase BackEnd
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Setting up databse
// Go to firebase website > firestore > Create database > Start in test mode > Enable
const db = firebaseApp.firestore();

// Setting up authentication (allow us for logging, signing,)
// Go to firebase website > Authentication > Sign-in method > Enable Google Sign in (enable Google logging in)
const auth = firebase.auth();

// Setting up provider
// GoogleAuthProvider will tell firebase we want the google login service
const provider = new firebase.auth.GoogleAuthProvider();

// Setting up exports to access the stuff outside
export { auth, provider }; // explicit export
export default db; // default export
