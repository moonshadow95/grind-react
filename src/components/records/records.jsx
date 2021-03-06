import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddForm from '../add_form/add_form';
import Record from '../record/record';
import styles from './records.module.css';

const Records = ({
  FileInput,
  records,
  addRecord,
  updateRecord,
  deleteRecord,
  type,
}) => {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const history = useHistory();
  const onToggle = () => {
    if (!isToggleOn) {
      setIsToggleOn(true);
    } else {
      setIsToggleOn(false);
    }
  };
  const changeType = () => {
    const preType = type;
    switch (preType) {
      case 'body':
        type = 'diet';
        break;

      case 'diet':
        type = 'body';
        break;

      default:
        throw new Error('unknown error');
    }
    history.push(`/home/${type}`);
  };

  return (
    <section className={styles.records}>
      <AddForm FileInput={FileInput} onAdd={addRecord} type={type} />
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
        {type === 'body' ? (
          <button className={styles.buttonDiet} onClick={changeType}>
            <span>Diet</span>
            <i className="fas fa-exchange-alt"></i>
          </button>
        ) : (
          <button className={styles.buttonDiet} onClick={changeType}>
            <span>Body</span>
            <i className="fas fa-exchange-alt"></i>
          </button>
        )}
      </div>
    </section>
  );
};

export default Records;
