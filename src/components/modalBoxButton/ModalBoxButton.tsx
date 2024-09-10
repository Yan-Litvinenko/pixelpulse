import React from 'react';
import styles from './ModalBoxButton.module.scss';
import {
    soundsClickTrigger,
    soundsModalTrigger,
} from '../../store/slices/soundsSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import type { IModalBoxButton } from '../../interfaces/interface.component';
import { stateModalSelector } from '../../store/selectors';

const ModalBoxButton = (props: IModalBoxButton): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const { delay } = useSelector(stateModalSelector);
    const {
        handleEnter,
        isValid,
        textEnter,
        typeEnter,
        handleEscape,
        textEsc,
    } = props;

    const closeModalByClick = () => {
        const isDelayEnd = Object.values(delay).some((modalDelay) => {
            return modalDelay === true;
        });

        if (isDelayEnd) dispatch(soundsModalTrigger());

        handleEscape();
    };

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
                onClick={closeModalByClick}
                type="button"
            >
                {textEsc}
            </button>
        </div>
    );
};

export { ModalBoxButton };
