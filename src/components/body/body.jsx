import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Records from '../records/records';
import styles from './body.module.css';

const Body = ({ FileInput, authService, type }) => {
  const [bodies, setBodies] = useState({
    2: {
      date: '21-01-15',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      bodyTag: 'Front',
      fileURL: '/images/sample_1.jpg',
    },
    3: {
      date: '21-02-02',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      bodyTag: 'Front',
      fileURL: '/images/sample_2.jpg',
    },
    4: {
      date: '21-02-25',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      bodyTag: 'Front',
      fileURL: '/images/sample_3.jpg',
    },
  });
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
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const createOrUpdateBody = (body) => {
    setBodies((bodies) => {
      const updated = { ...bodies };
      updated[body.id] = body;
      console.log(updated);
      return updated;
    });
  };

  const deleteBody = (body) => {
    setBodies((bodies) => {
      const updated = { ...bodies };
      delete updated[body.id];
      return updated;
    });
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
