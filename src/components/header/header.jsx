import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => (
  <div>
    <header className={styles.header}>
      <h1 className={styles.title}>Grind.</h1>
      {onLogout && (
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button className={styles.button}>Front</button>
            </li>
            <li className={styles.item}>
              <button className={styles.button}>Back</button>
            </li>
            <li className={styles.item}>
              <button className={styles.button}>Leg</button>
            </li>
            <li className={styles.item}>
              <button className={styles.button}>Arm</button>
            </li>
            <li className={styles.item}>
              <button className={styles.logout} onClick={onLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
    <div className={styles.line}></div>
  </div>
);
export default Header;
