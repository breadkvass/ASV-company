import React, { useEffect, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import closeIcon from '../../assets/images/close-icon.svg';
import styles from './modal-form.module.css';

const modalRoot = document.getElementById("react-modals");
const stopPropagation = e => e.stopPropagation();

function ModalForm(props) {
    const escHandler = useCallback((e) => {
        if (e.key === "Escape") {
            e.stopPropagation();
            props.closeHandler();
        }
    }, []);

    const [ nameValue, setNameValue ] = useState('');
    const [ emailValue, setEmailValue ] = useState('');
    const [ emailPhone, setPhoneValue ] = useState('');
    const [ сommentValue, setCommentValue ] = useState('');

    useEffect(() => {
        document.addEventListener("keydown", escHandler, false);

        return () => {
            document.removeEventListener("keydown", escHandler, false);
        };

    }, [escHandler]);

    const onClickHandler = (e) => {
        e.stopPropagation();
        props.closeHandler();
    }

    return ReactDOM.createPortal(
        (
        <ModalOverlay closeHandler={props.closeHandler}>
            <form className={styles.form} onClick={stopPropagation}>
                <img className={styles.close_icon} src={closeIcon} alt="Закрыть" onClick={onClickHandler}/>
                <h3 className={styles.title}>Оставить заявку</h3>
                <label className={styles.label}>ФИО
                    <input className={styles.input}
                    type="text"
                    onChange={(e) => setNameValue(e.target.value)}
                    value={nameValue}
                    />
                </label>
                <label className={styles.label}>E-mail
                    <input className={styles.input}
                    type="email"
                    onChange={(e) => setEmailValue(e.target.value)}
                    value={emailValue}
                    />
                </label>
                <label className={styles.label}>Телефон
                    <input className={styles.input}
                    type="tel"
                    onChange={(e) => setPhoneValue(e.target.value)}
                    value={emailPhone}
                    placeholder='8 (999) 123-45-67'
                    />
                </label>
                <label className={styles.label}>Комментарий
                    <textarea className={styles.textarea}
                    onChange={(e) => setCommentValue(e.target.value)}
                    value={сommentValue}
                    placeholder='При желании укажите необходимые сроки или другую важную для вас информацию'
                    />
                </label>
                <button className={styles.button} type='submit'>Отправить</button>
            </form>
        </ModalOverlay>
    ), 
    modalRoot
);
}

ModalForm.propTypes = {
    closeHandler: PropTypes.func
}

export default ModalForm;

