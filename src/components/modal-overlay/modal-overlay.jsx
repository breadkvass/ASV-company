import styles from "./modal-overlay.module.css";
import PropTypes from 'prop-types';
import React from "react";

function ModalOverlay(props) {
    const onClickHandler = (e) => {
        e.stopPropagation();
        props.closeHandler();
    }
    return (
        <div className={styles.overlay} onMouseDown={onClickHandler}>
            {props.children}
        </div>
    )
}

ModalOverlay.propTypes = {
    closeHandler: PropTypes.func
}

export default ModalOverlay;