import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import AddForm from '../add_form/add_form';
import Record from '../record/record';
import styles from './records.module.css';

const Records = ({
  FileInput,
  records,
  addRecord,
  updateRecord,
  deleteRecord,
}) => {
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
      <AddForm FileInput={FileInput} onAdd={addRecord} />
      {Object.keys(records).map((key) => (
        <Record
          key={key}
          record={records[key]}
          toggle={isToggleOn}
          FileInput={FileInput}
          updateRecord={updateRecord}
          deleteRecord={deleteRecord}
        />
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
        {path === '/home/body' ? (
          <Link to="../home/diet">
            <button className={styles.buttonDiet}>
              <span>Diet</span>
              <i className="fas fa-exchange-alt"></i>
            </button>
          </Link>
        ) : (
          <Link to="../home/body">
            <button className={styles.buttonDiet}>
              <span>Body</span>
              <i className="fas fa-exchange-alt"></i>
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Records;
