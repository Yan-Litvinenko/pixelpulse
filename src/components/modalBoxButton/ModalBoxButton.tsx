import React from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import { IModalBoxButton } from '../../interfaces/interface.component';
import styles from './ModalBoxButton.module.scss';

const ModalBoxButton = (props: IModalBoxButton): React.JSX.Element => {
    const { handleEnter, isValid, textEnter, typeEnter, handleEscape, textEsc } = props;
    const { handleSoundClick } = useAppContext();

    return (
        <div className={styles.box}>
            <button
                className={`${styles.box__enter} ${!props.isValid ? styles.box__enter_deactive : ''}`}
                onClick={() => {
                    handleEnter();
                    handleSoundClick();
                }}
                disabled={!isValid}
                type={typeEnter}
            >
                {textEnter}
            </button>
            <button className={styles.box__esc} onClick={handleEscape} type="button">
                {textEsc}
            </button>
        </div>
    );
};

export default ModalBoxButton;
