import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBVPwN0yJFnt_PpJsWuxSJROyBmee5WK1M',
  authDomain: 'crwn-db-eccb9.firebaseapp.com',
  databaseURL: 'https://crwn-db-eccb9.firebaseio.com',
  projectId: 'crwn-db-eccb9',
  storageBucket: '',
  messagingSenderId: '312491116302',
  appId: '1:312491116302:web:74628980c00bd7afaa395f',
  measurementId: 'G-QFG4X47ED0'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
