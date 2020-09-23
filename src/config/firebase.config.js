import * as firebase from 'firebase';

var firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

export var provider = new firebase.auth.GoogleAuthProvider();

export var auth = firebase.auth();

export var db = firebase.firestore();

export default firebase;