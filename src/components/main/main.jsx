import React from 'react';
import styles from './main.module.css';
import Header from '../header/header';
import PropTypes from 'prop-types';

function Main(props) {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>Аренда телескопических погрузчиков</h1>
        <button className={styles.button} onClick={props.openHandler}>оставить заявку</button>
      </div>
    </div>
  )
}

Main.propTypes = {
  openHandler: PropTypes.func
}

export default Main;