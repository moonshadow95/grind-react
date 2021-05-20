import React from 'react';
import styles from './record.module.css';

const Record = ({ record, toggle }) => {
  const { weight, muscle, bodyFat, tag, fileURL } = record;

  return (
    <div className={styles.record}>
      <form className={`${styles.form} ${toggle ? styles.show : styles.hide}`}>
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
      </form>
      {fileURL && <img className={styles.image} src={fileURL} alt="image" />}
    </div>
  );
};

export default Record;
