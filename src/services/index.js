import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAgyFeDykSFNFAYp49umTWQbclx3ZMXl0k',
  authDomain: 'reactjs-instagram-abc8d.firebaseapp.com',
  projectId: 'reactjs-instagram-abc8d',
  storageBucket: 'reactjs-instagram-abc8d.appspot.com',
  messagingSenderId: '133192155140',
  appId: '1:133192155140:web:e2fcc7d2441880941af551',
}
const firebaseConfig = firebase.initializeApp(config)
const db = firebase.firestore()

export { firebaseConfig as firebase, db }
