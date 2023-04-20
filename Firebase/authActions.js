// authActions.js
import firebase from 'firebase/app';
import 'firebase/auth';
import { loginSuccess, logoutSuccess } from './actions';

// Login with email and password
export const loginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Dispatch LOGIN_SUCCESS action with user data
        dispatch(loginSuccess(userCredential.user));
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
      });
  };
};

// Login with Google
export const loginWithGoogle = () => {
  return (dispatch) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((userCredential) => {
        // Dispatch LOGIN_SUCCESS action with user data
        dispatch(loginSuccess(userCredential.user));
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
      });
  };
};

// Logout
export const logout = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Dispatch LOGOUT_SUCCESS action
        dispatch(logoutSuccess());
      })
      .catch((error) => {
        // Handle logout error
        console.error(error);
      });
  };
};