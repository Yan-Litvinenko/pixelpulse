import React from 'react';
import styles from './ModalBoxButton.module.scss';
import { soundsClickTrigger } from '../../store/slices/soundsSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import type { IModalBoxButton } from '../../interfaces/interface.component';

const ModalBoxButton = (props: IModalBoxButton): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const {
        handleEnter,
        isValid,
        textEnter,
        typeEnter,
        handleEscape,
        textEsc,
    } = props;

    return (
        <div className={styles.box}>
            <button
                className={`${styles.box__enter} ${!props.isValid ? styles.box__enter_deactive : ''}`}
                onClick={() => {
                    handleEnter();
                    dispatch(soundsClickTrigger());
                }}
                disabled={!isValid}
                type={typeEnter}
            >
                {textEnter}
            </button>
            <button
                className={styles.box__esc}
                onClick={handleEscape}
                type="button"
            >
                {textEsc}
            </button>
        </div>
    );
};

export { ModalBoxButton };
