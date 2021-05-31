import firebaseApp from './firebase';

class BodyRepository {
  syncBodies(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/bodies/`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveBody(userId, body) {
    firebaseApp.database().ref(`${userId}/bodies/${body.id}`).set(body);
  }
  removeBody(userId, body) {
    firebaseApp.database().ref(`${userId}/bodies/${body.id}`).remove();
  }
}

export default BodyRepository;
