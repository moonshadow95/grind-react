import React from 'react';
import Record from '../record/record';
import styles from './records.module.css';

const Records = ({ records }) => (
  <section className={styles.records}>
    {records.map((record) => (
      <Record record={record} />
    ))}
  </section>
);

export default Records;
