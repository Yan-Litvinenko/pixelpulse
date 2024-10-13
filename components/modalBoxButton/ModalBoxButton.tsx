'use client';

import React from 'react';
import styles from '@/styles/components/modalBoxButton/ModalBoxButton.module.scss';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/redux/store';
import type { ModalBoxButtonProps } from '@/interface/form/form.interface';

export default function ModalBoxButton(props: ModalBoxButtonProps): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const { handleEnter, isValid, textEnter, typeEnter, handleEscape, textEsc } = props;

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
            <button className={styles.box__esc} onClick={handleEscape} type="button">
                {textEsc}
            </button>
        </div>
    );
}
