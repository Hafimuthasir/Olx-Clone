import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyD3MpE78CkHW9Xpq2WUbHeKKEPp3bJMepM",
  authDomain: "olx-clone-48fe6.firebaseapp.com",
  projectId: "olx-clone-48fe6",
  storageBucket: "olx-clone-48fe6.appspot.com",
  messagingSenderId: "18524781966",
  appId: "1:18524781966:web:82bad2ca954948efb9f8df",
  measurementId: "G-VSR8H9QBZ0"
};

  export default firebase.initializeApp(firebaseConfig)