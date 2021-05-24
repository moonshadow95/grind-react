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
                <button className={styles.button}>
                  {url === '/home/body' ? 'Front' : 'Breakfast'}
                </button>
              </li>
              <li className={styles.item}>
                <button className={styles.button}>
                  {url === '/home/body' ? 'Back' : 'Lunch'}
                </button>
              </li>
              <li className={styles.item}>
                <button className={styles.button}>
                  {url === '/home/body' ? 'Leg' : 'Dinner'}
                </button>
              </li>
              <li className={styles.item}>
                <button className={styles.button}>
                  {url === '/home/body' ? 'Arm' : 'Snack'}
                </button>
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
