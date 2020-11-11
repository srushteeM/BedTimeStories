import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC4ZJnLVgIK9d2Sl6ZrjM3O6Aa2AB8a3Cs",
  authDomain: "bedtimestories-a3144.firebaseapp.com",
  databaseURL: "https://bedtimestories-a3144.firebaseio.com",
  projectId: "bedtimestories-a3144",
  storageBucket: "bedtimestories-a3144.appspot.com",
  messagingSenderId: "478185417320",
  appId: "1:478185417320:web:a9ad9ac6cc9bd6345e69dd",
  measurementId: "G-JL4YNZEXZ2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   