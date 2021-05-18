import React from 'react';
import styles from './record.module.css';

const Record = ({ record }) => {
  const { weight, muscle, bodyFat, memo, tag } = record;
  return (
    <div className={styles.record}>
      <form className={styles.form}>
        <input type="date" className={styles.date}></input>
        <div className={styles.container}>
          <input
            type="text"
            className={styles.weight}
            min="0"
            placeholder={weight}
          ></input>
          kg
        </div>
        <div className={styles.container}>
          <input
            type="text"
            className={styles.muscle}
            min="0"
            placeholder={muscle}
          ></input>
          kg
        </div>
        <div className={styles.container}>
          <input
            type="text"
            className={styles.bodyFat}
            min="0"
            placeholder={bodyFat}
          ></input>
          %
        </div>
        <div>
          #&nbsp;
          <input
            type="text"
            list="tag"
            placeholder={tag}
            className={styles.tag}
          ></input>
        </div>
        <datalist id="tag">
          <option value="Front"></option>
          <option value="Back"></option>
          <option value="Leg"></option>
          <option value="Arm"></option>
          <option value="Diet"></option>
        </datalist>
        <textarea className={styles.memo} placeholder={memo}></textarea>
      </form>
    </div>
  );
};

export default Record;
