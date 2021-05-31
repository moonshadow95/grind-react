import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './record.module.css';

const Record = ({ FileInput, updateRecord, deleteRecord, record, toggle }) => {
  const { date, weight, muscle, bodyFat, bodyTag, dietTag, fileName, fileURL } =
    record;
  const DEFAULT_IMAGE = '/images/default.png';
  const dateRef = useRef();
  const weightRef = useRef();
  const muscleRef = useRef();
  const fatRef = useRef();
  const tagRef = useRef();

  const onFileChange = (file) => {
    updateRecord({ ...record, fileName: file.name, fileURL: file.url });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateRecord({
      ...record,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteRecord(record);
  };
  return (
    <div className={styles.record}>
      <form className={`${styles.form} ${toggle ? styles.show : styles.hide}`}>
        <input
          ref={dateRef}
          type="date"
          value={date}
          className={`${styles.date} ${styles.input}`}
          onChange={onChange}
        ></input>
        {weight && (
          <div className={styles.container}>
            <input
              ref={weightRef}
              type="text"
              className={styles.input}
              placeholder={weight}
              onChange={onChange}
            ></input>
            kg
          </div>
        )}
        {muscle && (
          <div className={styles.container}>
            <input
              ref={muscleRef}
              type="text"
              className={styles.input}
              placeholder={muscle}
              onChange={onChange}
            ></input>
            kg
          </div>
        )}
        {bodyFat && (
          <div className={styles.container}>
            <input
              ref={fatRef}
              type="text"
              className={`${styles.input} ${styles.fat}`}
              placeholder={bodyFat}
              onChange={onChange}
            ></input>
            %
          </div>
        )}
        <div className={styles.container}>
          #&nbsp;
          <select
            ref={tagRef}
            type="text"
            placeholder={bodyTag || dietTag}
            className={`${styles.tag} ${styles.input}`}
            onChange={onChange}
          >
            {bodyTag ? (
              <>
                <option value="Front">Front</option>
                <option value="Back">Back</option>
                <option value="Leg">Leg</option>
                <option value="Arm">Arm</option>
              </>
            ) : (
              <>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </>
            )}
          </select>
        </div>
      </form>
      <img
        className={styles.image}
        src={fileURL || DEFAULT_IMAGE}
        alt="image"
      />
      <div className={styles.buttons}>
        <FileInput name={fileName} onFileChange={onFileChange} />
        <Button onClick={onSubmit} name="Delete" />
      </div>
    </div>
  );
};

export default Record;
