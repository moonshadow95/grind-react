import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styles from './header.module.css';

const Header = ({ onLogout, type }) => {
  const [isGuideOn, setIsGuideOn] = useState(false);
  const history = useHistory();
  const goToHome = () => {
    history.push('../home');
  };
  // I'm still working on it...
  //  const recordFilter = (event) => {
  //   const filterTarget = event.target.textContent;
  //   console.log(filterTarget);
  //   return filterTarget;
  // };
  const onGuide = () => {
    if (!isGuideOn) {
      setIsGuideOn(true);
    } else {
      setIsGuideOn(false);
    }
  };
  return (
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
            <li
              className={`${styles.item} ${
                isGuideOn ? styles.listOff : styles.listOn
              }`}
            >
              <button className={styles.button}>All</button>
            </li>
            <li
              className={`${styles.item} ${
                isGuideOn ? styles.listOff : styles.listOn
              }`}
            >
              <button className={styles.button}>
                {type === 'body' ? 'Front' : 'Breakfast'}
              </button>
            </li>
            <li
              className={`${styles.item} ${
                isGuideOn ? styles.listOff : styles.listOn
              }`}
            >
              <button className={styles.button}>
                {type === 'body' ? 'Back' : 'Lunch'}
              </button>
            </li>
            <li
              className={`${styles.item} ${
                isGuideOn ? styles.listOff : styles.listOn
              }`}
            >
              <button className={styles.button}>
                {type === 'body' ? 'Leg' : 'Dinner'}
              </button>
            </li>
            <li
              className={`${styles.item} ${
                isGuideOn ? styles.listOff : styles.listOn
              }`}
            >
              <button className={styles.button}>
                {type === 'body' ? 'Arm' : 'Snack'}
              </button>
            </li>
            <li
              className={`${styles.item} ${
                isGuideOn ? styles.listOff : styles.listOn
              }`}
            >
              <button
                className={`${styles.logout} ${styles.button}`}
                onClick={onLogout}
              >
                Logout
              </button>
            </li>
            <li className={styles.guide} onClick={onGuide}>
              <span
                className={`${styles.guideBar} ${
                  isGuideOn ? styles.on : styles.off
                }`}
              ></span>
              <span
                className={`${styles.guideBar} ${
                  isGuideOn ? styles.on : styles.off
                }`}
              ></span>
              <span
                className={`${styles.guideBar} ${
                  isGuideOn ? styles.on : styles.off
                }`}
              ></span>
            </li>
          </ul>
        </nav>
      )}
      <div className={styles.line}></div>
    </header>
  );
};
export default Header;
