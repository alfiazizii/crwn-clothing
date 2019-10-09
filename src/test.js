import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('H7mJx5IwmYuU26ZJ6iJA')
  .collection('cartItems')
  .doc('RGx5VKcNoOgjnSMBINC7');

firestore.doc('/users/H7mJx5IwmYuU26ZJ6iJA/cartItems/RGx5VKcNoOgjnSMBINC7');

firestore.collection(
  '/users/H7mJx5IwmYuU26ZJ6iJA/cartItems/RGx5VKcNoOgjnSMBINC7'
);
