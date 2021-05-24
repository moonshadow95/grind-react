import React from 'react';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './record.module.css';

const Record = ({ record, toggle }) => {
  const { weight, muscle, bodyFat, bodyTag, dietTag, fileURL } = record;
  const DEFAULT_IMAGE = '/images/default.png';
  const onAdd = () => {
    console.log('Add');
  };
  const onDelete = () => {
    console.log('Delete');
  };
  return (
    <div className={styles.record}>
      <form className={`${styles.form} ${toggle ? styles.show : styles.hide}`}>
        <input type="date" className={`${styles.date} ${styles.input}`}></input>
        {weight && (
          <div className={styles.container}>
            <input
              type="text"
              className={styles.input}
              min="0"
              placeholder={weight}
            ></input>
            kg
          </div>
        )}
        {muscle && (
          <div className={styles.container}>
            <input
              type="text"
              className={styles.input}
              min="0"
              placeholder={muscle}
            ></input>
            kg
          </div>
        )}
        {bodyFat && (
          <div className={styles.container}>
            <input
              type="text"
              className={styles.input}
              min="0"
              placeholder={bodyFat}
            ></input>
            %
          </div>
        )}
        <div className={styles.container}>
          #&nbsp;
          <input
            type="text"
            list="tag"
            placeholder={bodyTag || dietTag}
            className={`${styles.tag} ${styles.input}`}
          ></input>
        </div>
        {bodyTag ? (
          <datalist id="tag">
            <option value="Front"></option>
            <option value="Back"></option>
            <option value="Leg"></option>
            <option value="Arm"></option>
            <option value="Diet"></option>
          </datalist>
        ) : (
          <datalist id="tag">
            <option value="Breakfast"></option>
            <option value="Lunch"></option>
            <option value="Dinner"></option>
            <option value="Snack"></option>
          </datalist>
        )}
      </form>
      <img
        className={styles.image}
        src={fileURL || DEFAULT_IMAGE}
        alt="image"
      />
    </div>
  );
};

export default Record;
