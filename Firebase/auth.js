import firebase from 'firebase/app';
import 'firebase/auth';
import store from './store';
import { loginSuccess, logoutSuccess } from './actions';


const firebaseConfig = {
    apiKey: "AIzaSyCx1bSnmZPqRlhYN0xPljM3LGmCjiIRDkk",
    authDomain: "challenge-7ddbc.firebaseapp.com",
    projectId: "challenge-7ddbc",
    storageBucket: "challenge-7ddbc.appspot.com",
    messagingSenderId: "995354637488",
    appId: "1:995354637488:web:ef74175a85c50cd8047775",
    measurementId: "G-N9B9X1QKEP"
};

firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
   
    store.dispatch(loginSuccess(user));
  } else {
  
    store.dispatch(logoutSuccess());
  }
});