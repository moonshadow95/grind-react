import React from 'react';
import { useRouteMatch } from 'react-router';
import styles from './add_form.module.css';

const AddForm = ({ FileInput }) => {
  const { url } = useRouteMatch();
  const DEFAULT_IMAGE = '/images/default.png';
  return (
    <div className={styles.record}>
      <form className={styles.form}>
        <input type="date" className={`${styles.input} ${styles.date}`}></input>
        {url === '/home/body' ? (
          <>
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
          </>
        ) : null}
        <div className={styles.container}>
          #&nbsp;
          <input
            type="text"
            list="tag"
            className={`${styles.input} ${styles.tag}`}
            placeholder="Tag"
          ></input>
        </div>
      </form>
      <img className={styles.image} src={DEFAULT_IMAGE} alt="default image" />
      <FileInput name={'Add'} />
    </div>
  );
};

export default AddForm;
