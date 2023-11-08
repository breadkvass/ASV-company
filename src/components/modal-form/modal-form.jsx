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
    const [ telValue, setTelValue ] = useState('');
    const [ сommentValue, setCommentValue ] = useState('');

    const nameHandler = (e) => {
        setNameValue(e.target.value);
        const validName = /[a-zA-Zа-яёА-ЯЁ\s\-]+$/;
        if (!validName.test(String(e.target.value))) {
            setinputsErrors({...inputsErrors, name: 'Используйте только буквы (не менее 2)'})
        } else {
            setinputsErrors({...inputsErrors, name: ''})
        }
    }

    const emailHandler = (e) => {
        setEmailValue(e.target.value);
        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!validEmail.test(String(e.target.value))) {
            setinputsErrors({...inputsErrors, email: 'Некорректный E-mail'})
        } else {
            setinputsErrors({...inputsErrors, email: ''})
        }
    }

    const telHandler = (e) => {
        setTelValue(e.target.value);
        const validTel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if (!validTel.test(String(e.target.value)) || e.target.value.length < 11) {
            setinputsErrors({...inputsErrors, tel: 'Некорректный номер телефона'})
        } else {
            setinputsErrors({...inputsErrors, tel: ''})
        }
    }

    const commentHandler = (e) => {
        setCommentValue(e.target.value);
    }

    const [ inputsDirty, setInputsDirty ] = useState({
        name: false,
        email: false,
        tel: false,
    })

    const [ inputsErrors, setinputsErrors ] = useState({
        name: 'Поле не должно быть пустым',
        email: 'Поле не должно быть пустым',
        tel: 'Поле не должно быть пустым',
    })



    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setInputsDirty({...inputsDirty, name: true})
                break
            case 'email':
                setInputsDirty({...inputsDirty, email: true})
                break
            case 'tel':
                setInputsDirty({...inputsDirty, tel: true})
                break
        }
    }

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
            <form className={styles.form} onClick={stopPropagation} >
                <img className={styles.close_icon} src={closeIcon} alt="Закрыть" onClick={onClickHandler}/>
                <h3 className={styles.title}>Оставить заявку</h3>
                <label className={styles.label}>ФИО
                    <input className={styles.input}
                    onBlur={e => blurHandler(e)}
                    name='name'
                    type="text"
                    onChange={e => nameHandler(e)}
                    value={nameValue}
                    />
                    {(inputsDirty.name && inputsErrors.name) && <p className={styles.error}>{inputsErrors.name}</p>}
                </label>
                <label className={styles.label}>E-mail
                    <input className={styles.input}
                    onBlur={e => blurHandler(e)}
                    type="email"
                    name='email'
                    onChange={e => emailHandler(e)}
                    value={emailValue}
                    />
                    {(inputsDirty.email && inputsErrors.email) && <p className={styles.error}>{inputsErrors.email}</p>}
                </label>
                <label className={styles.label}>Телефон
                    <input className={styles.input}
                    onBlur={e => blurHandler(e)}
                    type="tel"
                    name='tel'
                    pattern='(\+?\d[- .]*){7,13}' required
                    onChange={e => telHandler(e)}
                    value={telValue}
                    placeholder='8 (999) 123-45-67'
                    
                    />
                    {(inputsDirty.tel && inputsErrors.tel) && <p className={styles.error}>{inputsErrors.tel}</p>}
                </label>
                <label className={styles.label}>Комментарий
                    <textarea className={styles.textarea}
                    onChange={e => setCommentValue(e.target.value)}
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

