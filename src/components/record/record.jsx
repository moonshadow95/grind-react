import React from 'react';
import Button from '../button/button';
import styles from './record.module.css';

const Record = ({ FileInput, updateRecord, deleteRecord, record, toggle }) => {
  const { date, weight, muscle, bodyFat, bodyTag, dietTag, fileName, fileURL } =
    record;
  const DEFAULT_IMAGE = '/images/default.png';

  const onFileChange = (file) => {
    updateRecord({ ...record, fileName: file.name, fileURL: file.url });
  };

  const onSubmit = () => {
    deleteRecord(record);
  };

  const defaultYear = new Date().getFullYear();
  let defaultMonth = new Date().getMonth() + 1;
  let defaultDate = new Date().getDate();

  return (
    <div className={styles.record}>
      <div
        className={`${styles.summary} ${toggle ? styles.show : styles.hide}`}
      >
        <span className={`${styles.date} ${styles.value}`}>
          {date ||
            `${defaultYear}-${
              defaultMonth < 10 ? `0${defaultMonth}` : `${defaultMonth}`
            }-${defaultDate < 10 ? `0${defaultDate}` : `${defaultDate}`}`}
        </span>
        {weight && (
          <div className={styles.container}>
            Weight-
            <span className={styles.value}>{weight}</span>
            kg
          </div>
        )}
        {muscle && (
          <div className={styles.container}>
            Muscle-
            <span className={styles.value}>{muscle}</span>
            kg
          </div>
        )}
        {bodyFat && (
          <div className={styles.container}>
            Fat-
            <span className={`${styles.value} ${styles.fat}`}>{bodyFat}</span>%
          </div>
        )}
        <div className={styles.container}>
          #&nbsp;
          <span className={`${styles.tag} ${styles.value}`}>
            {dietTag || bodyTag}
          </span>
        </div>
      </div>
      <img className={styles.image} src={fileURL || DEFAULT_IMAGE} alt="" />
      <div className={styles.buttons}>
        <FileInput name={fileName} onFileChange={onFileChange} />
        <Button onClick={onSubmit} name="Delete" />
      </div>
    </div>
  );
};

export default Record;
