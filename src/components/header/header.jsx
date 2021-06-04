import React from 'react';
import { useHistory } from 'react-router';
import styles from './header.module.css';

const Header = ({ onLogout, type }) => {
  const history = useHistory();
  const goToHome = () => {
    history.push('../home');
  };
  return (
    <div>
      <header className={`${styles.header} ${onLogout && styles.fixed}`}>
        {onLogout ? (
          <h1 className={styles.title} onClick={goToHome}>
            Grind.
          </h1>
        ) : (
          <h1 className={styles.title}>Grind.</h1>
        )}
        {onLogout && (
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <button className={styles.button}>
                  {type === 'body' ? 'Front' : 'Breakfast'}
                </button>
              </li>
              <li className={styles.item}>
                <button className={styles.button}>
                  {type === 'body' ? 'Back' : 'Lunch'}
                </button>
              </li>
              <li className={styles.item}>
                <button className={styles.button}>
                  {type === 'body' ? 'Leg' : 'Dinner'}
                </button>
              </li>
              <li className={styles.item}>
                <button className={styles.button}>
                  {type === 'body' ? 'Arm' : 'Snack'}
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
