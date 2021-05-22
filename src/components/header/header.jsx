import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
  let { url } = useRouteMatch();
  return (
    <div>
      <header className={`${styles.header} ${onLogout && styles.fixed}`}>
        {onLogout ? (
          <Link to="/home">
            <h1 className={styles.title}>Grind.</h1>
          </Link>
        ) : (
          <h1 className={styles.title}>Grind.</h1>
        )}
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
        <div className={styles.line}></div>
      </header>
    </div>
  );
};
export default Header;
