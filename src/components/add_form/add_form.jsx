import { findByRole } from '@testing-library/dom';
import React, { useRef, useState } from 'react';
import { useRouteMatch } from 'react-router';
import Button from '../button/button';
import styles from './add_form.module.css';

const AddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const dateRef = useRef();
  const weightRef = useRef();
  const muscleRef = useRef();
  const fatRef = useRef();
  const tagRef = useRef();
  const { url } = useRouteMatch();
  const DEFAULT_IMAGE = '/images/default.png';
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const record = {
      id: Date.now(), // uuid
      date: dateRef.current.value || '',
      weight: weightRef.current.value || '',
      muscle: muscleRef.current.value || '',
      bodyFat: fatRef.current.value || '',
      bodyTag: tagRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(record);
  };
  return (
    <div className={styles.record}>
      <form ref={formRef} className={styles.form}>
        <input
          ref={dateRef}
          type="date"
          name="date"
          className={`${styles.input} ${styles.date}`}
        ></input>
        {url === '/home/body' ? (
          <>
            <div className={styles.container}>
              <input
                ref={weightRef}
                type="text"
                className={styles.input}
                name="weight"
                placeholder="Weight"
              ></input>
              kg
            </div>
            <div className={styles.container}>
              <input
                ref={muscleRef}
                type="text"
                className={styles.input}
                name="muscle"
                placeholder="Muscle"
              ></input>
              kg
            </div>
            <div className={styles.container}>
              <input
                ref={fatRef}
                type="text"
                className={`${styles.input} ${styles.fat}`}
                name="fat"
                placeholder="Fat"
              ></input>
              %
            </div>
          </>
        ) : null}
        <div className={styles.container}>
          #&nbsp;
          <select
            ref={tagRef}
            type="text"
            name="tag"
            className={`${styles.input} ${styles.tag} ${
              url === 'home/diet' && styles.diet
            }`}
            placeholder="Tag"
          >
            {url === '/home/body' ? (
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
        src={file.fileURL || DEFAULT_IMAGE}
        alt="default image"
      />
      <div className={styles.buttons}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
        <Button onClick={onSubmit} name="Add" />
      </div>
    </div>
  );
};

export default AddForm;
