import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import styles from './home.module.css';

const Home = ({ authService }) => {
  const historyState = useHistory().state;
  const [setUserId] = useState(historyState && historyState.id);
  const history = useHistory();
  const onBodyClick = () => {
    authService.onAuthChange((user) => {
      user && goToBody(user.id);
    });
  };
  const onDietClick = () => {
    authService.onAuthChange((user) => {
      user && goToDiet(user.id);
    });
  };
  const goToBody = (userId) => {
    history.push({
      pathname: '/home/body',
      state: { id: userId },
    });
  };
  const goToDiet = (userId) => {
    history.push({
      pathname: '/home/diet',
      state: { id: userId },
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      setUserId(user.uid);
    });
  });

  return (
    <section className={styles.home}>
      <Header />
      <h1 className={styles.title}>Grind yourself.</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button} onClick={onBodyClick}>
            <div className={styles.left}></div>
            <div className={styles.top}></div>
            <div className={styles.right}></div>
            <div className={styles.bottom}></div>
            <img className={styles.body} src="/images/body.png" alt="body" />
            Body
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button} onClick={onDietClick}>
            <div className={styles.left}></div>
            <div className={styles.top}></div>
            <div className={styles.right}></div>
            <div className={styles.bottom}></div>
            <img className={styles.diet} src="/images/diet.png" alt="diet" />
            Diet
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Home;
