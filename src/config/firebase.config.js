import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDaoyxR1IVVZBCJ2ICoZLumiTDIK83vDlc",
    authDomain: "ems-gs.firebaseapp.com",
    databaseURL: "https://ems-gs.firebaseio.com",
    projectId: "ems-gs",
    storageBucket: "ems-gs.appspot.com",
    messagingSenderId: "1050835199269",
    appId: "1:1050835199269:web:c976bb358e2563fbf3e6cc"
};

firebase.initializeApp(firebaseConfig);

export var provider = new firebase.auth.GoogleAuthProvider();

export var auth = firebase.auth();

export var db = firebase.firestore();

export default firebase;