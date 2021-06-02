import firebaseApp from './firebase';

class DietRepository {
  syncDiets(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/diets/`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveDiet(userId, diet) {
    firebaseApp.database().ref(`${userId}/diets/${diet.id}`).set(diet);
  }
  removeDiet(userId, diet) {
    firebaseApp.database().ref(`${userId}/diets/${diet.id}`).remove();
  }
}

export default DietRepository;
