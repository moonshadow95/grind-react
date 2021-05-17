import React from 'react';
import Header from '../header/header';
import styles from './login.module.css';

const Login = (props) => {
  return (
    <section className={styles.login}>
      <Header />
      <h1 className={styles.title}>Grind yourself.</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button}>
            <div className={styles.left}></div>
            <div className={styles.top}></div>
            <div className={styles.right}></div>
            <div className={styles.bottom}></div>
            <i className="fab fa-google"></i>Google
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button}>
            <div className={styles.left}></div>
            <div className={styles.top}></div>
            <div className={styles.right}></div>
            <div className={styles.bottom}></div>
            <i className="fab fa-facebook-square"></i>Facebook
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button}>
            <div className={styles.left}></div>
            <div className={styles.top}></div>
            <div className={styles.right}></div>
            <div className={styles.bottom}></div>
            <i className="fab fa-twitter"></i>Twitter
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Login;