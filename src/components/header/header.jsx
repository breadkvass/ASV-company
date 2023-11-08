import React from 'react';
import styles from './header.module.css';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.info}>
            <img className={styles.logo} src={logo} alt='Логотип' />
            <div className={styles.contacts}>
                <a className={styles.contact} href='mailto:7786008@mail.ru'>7786008@mail.ru</a>
                <a className={styles.contact} href='tel:+74957786008'>8 495 778 60 08</a> 
            </div>
        </div>
    </div>
  )
}


export default Header;