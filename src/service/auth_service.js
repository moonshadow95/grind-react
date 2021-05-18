import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  // login
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  // 현재 로그인한 사용자 가져오기
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  // logout
  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
