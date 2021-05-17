import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
  <div>
    <header className={styles.header}>Grind</header>
    <div className={styles.line}></div>
  </div>
);

export default Header;
