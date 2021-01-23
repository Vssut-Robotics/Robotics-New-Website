import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDQe2Rx6UOyK9-lW4cUuG7Vsi7jNSVAc58",
  authDomain: "vssutrobotics-84c4f.firebaseapp.com",
  databaseURL: "https://vssutrobotics-84c4f.firebaseio.com",
  projectId: "vssutrobotics-84c4f",
  storageBucket: "vssutrobotics-84c4f.appspot.com",
  messagingSenderId: "365680119518",
  appId: "1:365680119518:web:f1515a2c46e3429cacfc4f",
  measurementId: "G-3W12GKB1HC",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
export default db;