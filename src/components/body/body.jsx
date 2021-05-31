import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Records from '../records/records';
import styles from './body.module.css';

const Body = ({ FileInput, authService, type, bodyRepository }) => {
  const historyState = useHistory().state;
  const [bodies, setBodies] = useState({});
  const [diets, setDiets] = useState({
    2: {
      date: '21-01-15',
      dietTag: 'Breakfast',
      fileURL: '/images/diet_sample_1.jpg',
    },
    3: {
      date: '21-02-02',
      dietTag: 'Breakfast',
      fileURL: '/images/diet_sample_2.jpg',
    },
    4: {
      date: '21-02-25',
      dietTag: 'Breakfast',
      fileURL: '/images/diet_sample_3.jpg',
    },
  });
  const [userId, setUserId] = useState(historyState && historyState.id);
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    // cosnt stopSync = ... => 실행하지 않고  할당만 한다.
    const stopSync = bodyRepository.syncBodies(userId, (bodies) => {
      setBodies(bodies);
    });
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  });

  const createOrUpdateBody = (body) => {
    setBodies((bodies) => {
      const updated = { ...bodies };
      updated[body.id] = body;
      return updated;
    });
    bodyRepository.saveBody(userId, body);
  };

  const deleteBody = (body) => {
    setBodies((bodies) => {
      const updated = { ...bodies };
      delete updated[body.id];
      return updated;
    });
    bodyRepository.removeBody(userId, body);
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
          />
        ) : (
          <Records FileInput={FileInput} records={diets} />
        )}
      </div>
    </section>
  );
};

export default Body;
