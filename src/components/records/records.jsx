import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Record from '../record/record';
import styles from './records.module.css';

const Records = ({ records }) => {
  let { path, url } = useRouteMatch();
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
      <div className={styles.container}>
        <button
          className={`${styles.buttonSum} ${
            isToggleOn ? styles.show : styles.hide
          }`}
          onClick={onToggle}
        >
          <span>Summary</span>
          <i className="fas fa-sort-down"></i>
        </button>

        <Link to="../diet">
          <button className={styles.buttonDiet}>
            <span>Diet</span>
            <i className="fas fa-exchange-alt"></i>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Records;
