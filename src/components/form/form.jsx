import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.css';

const stopPropagation = e => e.stopPropagation();

export const SucceedResult = (props) => (
    <div className={styles.form} onMouseDown={stopPropagation}>
        <h3 className={styles.title}>Заявка отправлена</h3>
        <label className={styles.label}>Благодарим за доверие! В&nbsp;ближайшее время мы с&nbsp;вами свяжемся.</label>
    </div>
);

export const FailedResult = (props) => (
    <div className={styles.form} onMouseDown={stopPropagation}>
        <h3 className={styles.title}>Произошла ошибка</h3>
        <label className={styles.label}>Пожалуйста, повторите заявку позже или позвоните нам:
            <a className={styles.contact} href='tel:+74957786008'>8&nbsp;495&nbsp;778&nbsp;60&nbsp;08</a>
        </label>
    </div>
);

export const Form = (props) => {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [telValue, setTelValue] = useState('');
    const [commentValue, setCommentValue] = useState('');

    const [inputsDirty, setInputsDirty] = useState({
        name: false,
        email: false,
        tel: false,
    });

    const [inputsErrors, setinputsErrors] = useState({
        name: 'Поле не должно быть пустым',
        email: 'Поле не должно быть пустым',
        tel: 'Поле не должно быть пустым',
    });

    const [ isValid, setIsValid ] = useState(true);

    const nameHandler = (e) => {
        setNameValue(e.target.value);
        const validName = /[a-zA-Zа-яёА-ЯЁ\s\-]+$/;
        if (!validName.test(String(e.target.value)) || nameValue < 2) {
            setinputsErrors({ ...inputsErrors, name: 'Используйте только буквы (не менее 2)' })
        } else {
            setinputsErrors({ ...inputsErrors, name: '' })
        }
    }

    const emailHandler = (e) => {
        setEmailValue(e.target.value);
        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!validEmail.test(String(e.target.value))) {
            setinputsErrors({ ...inputsErrors, email: 'Некорректный E-mail' })
        } else {
            setinputsErrors({ ...inputsErrors, email: '' })
        }
    }

    const telHandler = (e) => {
        setTelValue(e.target.value);
        const validTel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if (!validTel.test(String(e.target.value)) || e.target.value.length < 11) {
            setinputsErrors({ ...inputsErrors, tel: 'Некорректный номер телефона' })
        } else {
            setinputsErrors({ ...inputsErrors, tel: '' })
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setInputsDirty({ ...inputsDirty, name: true })
                break
            case 'email':
                setInputsDirty({ ...inputsDirty, email: true })
                break
            case 'tel':
                setInputsDirty({ ...inputsDirty, tel: true })
                break
        }
    }

    const onSubmitHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
        fetch('https://asv.sulimova.online/asv-requests.php', {
            method: 'POST',
            body: new FormData(document.getElementById('form'))
        })
        .then(() => {
            props.setSuccess(true);
        })
        .catch(() => {
            props.setSuccess(false);
        })
        .finally(() => {
            props.setSubmited(true);
        });
    }

    useEffect(() => {
        if (!nameValue || !emailValue || !telValue || inputsErrors.name || inputsErrors.email || inputsErrors.tel) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [nameValue, emailValue, telValue]);

    return (
        <form className={styles.form} id='form' onMouseDown={stopPropagation} onSubmit={onSubmitHandler}>
            <h3 className={styles.title}>Оставить заявку</h3>
            <label className={styles.label}>ФИО
                <input className={styles.input}
                    onBlur={e => blurHandler(e)}
                    name='name'
                    type='text'
                    required
                    onChange={e => nameHandler(e)}
                    value={nameValue}
                />
                {(inputsDirty.name && inputsErrors.name) && <p className={styles.error}>{inputsErrors.name}</p>}
            </label>
            <label className={styles.label}>E-mail
                <input className={styles.input}
                    onBlur={e => blurHandler(e)}
                    type='email'
                    name='email'
                    required
                    onChange={e => emailHandler(e)}
                    value={emailValue}
                />
                {(inputsDirty.email && inputsErrors.email) && <p className={styles.error}>{inputsErrors.email}</p>}
            </label>
            <label className={styles.label}>Телефон
                <input className={styles.input}
                    onBlur={e => blurHandler(e)}
                    type='tel'
                    name='tel'
                    required
                    onChange={e => telHandler(e)}
                    value={telValue}
                    placeholder='8 (999) 123-45-67'

                />
                {(inputsDirty.tel && inputsErrors.tel) && <p className={styles.error}>{inputsErrors.tel}</p>}
            </label>
            <label className={styles.label}>Комментарий
                <textarea className={styles.textarea}
                    onChange={e => setCommentValue(e.target.value)}
                    name='comment'
                    value={commentValue}
                    placeholder='При желании укажите необходимые сроки или другую важную для вас информацию'
                />
            </label>
            <button className={styles.button} disabled={!isValid ? true : false} type='submit'>Отправить</button>
        </form>
    )
}

Form.propTypes = {
    closeHandler: PropTypes.func
}