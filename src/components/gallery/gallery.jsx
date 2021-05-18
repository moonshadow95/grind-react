import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Records from '../records/records';
import styles from './gallery.module.css';

const Gallery = ({ authService }) => {
  const [records, setRecords] = useState([
    {
      id: 1,
      date: '20-11-05',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      memo: 'write your memo',
      fileURL: null,
    },
    {
      id: 2,
      date: '21-01-15',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      memo: 'write your memo',
      fileURL: null,
    },
    {
      id: 3,
      date: '21-02-02',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      memo: 'write your memo',
      fileURL: null,
    },
    {
      id: 4,
      date: '21-02-25',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      memo: 'write your memo',
      fileURL: null,
    },
    {
      id: 5,
      date: '21-03-05',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      memo: 'write your memo',
      fileURL: null,
    },
    {
      id: 6,
      date: '20-04-28',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      memo: 'write your memo',
      fileURL: null,
    },
    {
      id: 7,
      date: '21-05-18',
      weight: '79.8',
      bodyFat: '17.3',
      muscle: '39.8',
      tag: 'Front',
      memo: 'write your memo',
      fileURL: null,
    },
  ]);
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
    <section className={styles.gallery}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Records records={records} />
      </div>
    </section>
  );
};

export default Gallery;
