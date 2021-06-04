import { firebaseDatabase } from './firebase';

class BodyRepository {
  syncBodies(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/bodies/`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveBody(userId, body) {
    firebaseDatabase.ref(`${userId}/bodies/${body.id}`).set(body);
  }
  removeBody(userId, body) {
    firebaseDatabase.ref(`${userId}/bodies/${body.id}`).remove();
  }
}

export default BodyRepository;
