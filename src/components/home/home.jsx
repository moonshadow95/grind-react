import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import styles from './home.module.css';

const Home = ({ authService }) => {
  let { path, url } = useRouteMatch();
  return (
    <section className={styles.home}>
      <Header />
      <h1 className={styles.title}>Grind yourself.</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to={`${url}/body`}>
            <button className={styles.button}>
              <div className={styles.left}></div>
              <div className={styles.top}></div>
              <div className={styles.right}></div>
              <div className={styles.bottom}></div>
              <img className={styles.body} src="/images/body.png" alt="body" />
              Body
            </button>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to={`${url}/diet`}>
            <button className={styles.button}>
              <div className={styles.left}></div>
              <div className={styles.top}></div>
              <div className={styles.right}></div>
              <div className={styles.bottom}></div>
              <img className={styles.diet} src="/images/diet.png" alt="diet" />
              Diet
            </button>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;
