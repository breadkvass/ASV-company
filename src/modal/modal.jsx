import React, { useEffect, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../components/modal-overlay/modal-overlay';
import { Form, SucceedResult, FailedResult } from '../form/form';
import styles from './modal.module.css';

const modalRoot = document.getElementById("react-modals");

function Modal(props) {
    const [submited, setSubmited] = useState(false);
    const [success, setSuccess] = useState(true);

    const escHandler = useCallback((e) => {
        if (e.key === "Escape") {
            e.stopPropagation();
            props.closeHandler();
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escHandler, false);

        return () => {
            document.removeEventListener("keydown", escHandler, false);
        };

    }, [escHandler]);

    useEffect(() => {
        document.body.classList.add(styles.modal_open);
        return () => {
            document.body.classList.remove(styles.modal_open);
        }
    })

    return ReactDOM.createPortal(
        (
            <ModalOverlay closeHandler={props.closeHandler}>
                {!submited ? <Form setSubmited={setSubmited} setSuccess={setSuccess} closeHandler={props.closeHandler} onClickHandler={props.closeHandler} /> :
                    success ? <SucceedResult onClickHandler={props.closeHandler} /> : <FailedResult onClickHandler={props.closeHandler} />
                }
            </ModalOverlay>
        ),
        modalRoot
    );
}



export default Modal;

