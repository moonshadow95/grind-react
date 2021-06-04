import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Records from '../records/records';
import styles from './main.module.css';

const Main = ({
  FileInput,
  authService,
  type,
  bodyRepository,
  dietRepository,
}) => {
  const historyState = useHistory().state;
  const [bodies, setBodies] = useState({});
  const [diets, setDiets] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    switch (type) {
      case 'body':
        // cosnt stopSync = ... => 실행하지 않고  할당만 한다.
        const stopBodySync = bodyRepository.syncBodies(userId, (bodies) => {
          setBodies(bodies);
        });
        return () => stopBodySync();

      case 'diet':
        // cosnt stopSync = ... => 실행하지 않고  할당만 한다.
        const stopDietSync = dietRepository.syncDiets(userId, (diets) => {
          setDiets(diets);
        });
        return () => stopDietSync();
      default:
        history.push('/home');
        break;
    }
  }, [userId, history, type, bodyRepository, dietRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [authService, history]);

  const createOrUpdateBody = (body) => {
    setBodies((bodies) => {
      const updated = { ...bodies };
      updated[body.id] = body;
      return updated;
    });
    bodyRepository.saveBody(userId, body);
  };

  const createOrUpdateDiet = (diet) => {
    setBodies((diets) => {
      const updated = { ...diets };
      updated[diet.id] = diet;
      return updated;
    });
    dietRepository.saveDiet(userId, diet);
  };

  const deleteBody = (body) => {
    setBodies((bodies) => {
      const updated = { ...bodies };
      delete updated[body.id];
      return updated;
    });
    bodyRepository.removeBody(userId, body);
  };

  const deleteDiet = (diet) => {
    setBodies((diets) => {
      const updated = { ...diets };
      delete updated[diet.id];
      return updated;
    });
    dietRepository.removeDiet(userId, diet);
  };
  return (
    <section className={styles.body}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        {type === 'body' ? (
          <Records
            FileInput={FileInput}
            records={bodies}
            addRecord={createOrUpdateBody}
            updateRecord={createOrUpdateBody}
            deleteRecord={deleteBody}
            type={type}
          />
        ) : (
          <Records
            FileInput={FileInput}
            records={diets}
            addRecord={createOrUpdateDiet}
            updateRecord={createOrUpdateDiet}
            deleteRecord={deleteDiet}
            type={type}
          />
        )}
      </div>
    </section>
  );
};

export default Main;
