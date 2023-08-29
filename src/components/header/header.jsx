import React from 'react';
import styles from './header.module.css';
import logo from '../../assets/images/logo.png'

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.info}>
            <img className={styles.logo} src={logo} alt='Логотип' />
            <div className={styles.contacts}>
                <p className={styles.contact}>7786008@mail.ru</p>
                <p className={styles.contact}>8 495 778 60 08</p> 
            </div>
        </div>
    </div>
  )
}


export default Header;