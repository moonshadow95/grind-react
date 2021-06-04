import { firebaseDatabase } from './firebase';

class DietRepository {
  syncDiets(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/diets/`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveDiet(userId, diet) {
    firebaseDatabase.ref(`${userId}/diets/${diet.id}`).set(diet);
  }
  removeDiet(userId, diet) {
    firebaseDatabase.ref(`${userId}/diets/${diet.id}`).remove();
  }
}

export default DietRepository;
