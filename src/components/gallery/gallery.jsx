import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import styles from './gallery.module.css';

const Gallery = ({ authService }) => {
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
      <div className={styles.container}></div>
    </section>
  );
};

export default Gallery;
