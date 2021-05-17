import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  // user login
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
