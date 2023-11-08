import React from 'react';
import styles from './footer.module.css';
import logo from '../../assets/images/logo.png';

function Footer() {
  return (
    <div className={styles.footer}>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.info}>
            <ul className={styles.contacts}>
                <a className={styles.contact_left} href='tel:+74957786008'>8 495 778 60 08</a>
                <a className={styles.contact_left} href='mailto:7786008@mail.ru'>7786008@mail.ru</a>
            </ul>
            <ul className={styles.contacts}>
                <p className={styles.contact_right}>ИП Ветров А.С.</p>
                <p className={styles.contact_right}>ИНН 502910749053</p>
            </ul>
        </div>
        <img className={styles.logo} src={logo} alt='Логотип' />
    </div>
  
  );
}

export default Footer; 