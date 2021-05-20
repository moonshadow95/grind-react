import React, { useState } from 'react';
import Record from '../record/record';
import styles from './records.module.css';

const Records = ({ records }) => {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const onToggle = () => {
    if (!isToggleOn) {
      setIsToggleOn(true);
    } else {
      setIsToggleOn(false);
    }
  };
  return (
    <section className={styles.records}>
      {Object.keys(records).map((key) => (
        <Record key={key} record={records[key]} toggle={isToggleOn} />
      ))}
      <button
        className={`${styles.button} ${isToggleOn ? styles.show : styles.hide}`}
        onClick={onToggle}
      >
        Summary
        <i className="fas fa-sort-down"></i>
      </button>
    </section>
  );
};

export default Records;
