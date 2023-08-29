import React from 'react';
import styles from './main.module.css';
import Header from '../header/header';

function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>Аренда телескопических погрузчиков</h1>
        <button className={styles.button}>оставить заявку</button>
      </div>
    </div>
  )
}


export default Main;