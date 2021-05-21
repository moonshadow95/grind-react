import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Records from '../records/records';
import styles from './body.module.css';

const Body = ({ authService }) => {
  const [records, setRecords] = useState({
    1: {
      date: '20-11-05',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      fileURL: null,
    },
    2: {
      date: '21-01-15',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      fileURL: '/images/sample_1.jpg',
    },
    3: {
      date: '21-02-02',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      fileURL: '/images/sample_2.jpg',
    },
    4: {
      date: '21-02-25',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      fileURL: '/images/sample_3.jpg',
    },
    5: {
      date: '21-03-05',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      fileURL: null,
    },
    6: {
      date: '20-04-28',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      fileURL: null,
    },
    7: {
      date: '21-05-18',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      fileURL: null,
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
  return (
    <section className={styles.body}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Records records={records} />
      </div>
    </section>
  );
};

export default Body;
