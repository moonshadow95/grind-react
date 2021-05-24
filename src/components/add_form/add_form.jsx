import React from 'react';
import styles from './add_form.module.css';

const AddForm = (props) => {
  const DEFAULT_IMAGE = '/images/default.png';
  return (
    <div className={styles.record}>
      <form className={styles.form}>
        <input type="date" className={`${styles.input} ${styles.date}`}></input>
        <div className={styles.container}>
          <input
            type="text"
            className={styles.input}
            min="0"
            placeholder="Weight"
          ></input>
          kg
        </div>
        <div className={styles.container}>
          <input
            type="text"
            className={styles.input}
            min="0"
            placeholder="Muscle"
          ></input>
          kg
        </div>
        <div className={styles.container}>
          <input
            type="text"
            className={styles.input}
            min="0"
            placeholder="Fat"
          ></input>
          %
        </div>
        <div className={styles.container}>
          #&nbsp;
          <input
            type="text"
            list="tag"
            className={`${styles.input} ${styles.tag}`}
            placeholder="Tag"
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
      <img className={styles.image} src={DEFAULT_IMAGE} alt="default image" />
    </div>
  );
};

export default AddForm;
