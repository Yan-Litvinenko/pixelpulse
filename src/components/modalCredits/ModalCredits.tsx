import React from 'react';
import creditsJson from '../../assets/json/credits.json';
import styles from './ModalCredits.module.scss';
import { ModalCreditsElement } from '../modalCreditsElement/ModalCreditsElement';
import { nanoid } from '@reduxjs/toolkit';
import { stopPropagation } from '../../utils/stopPropagation';
import { useModal } from '../../hooks/useModal';

const ModalCredits = (): React.JSX.Element => {
    const closeModalCredits = useModal('credits').close;

    return (
        <div className={styles.modal} onClick={closeModalCredits}>
            <div className={styles.modal__inner} onClick={stopPropagation}>
                <h3 className={styles.modal__title}>Credits</h3>
                <h4 className={styles.modal__subtitle}>Everything involved in this project</h4>
                <div className={styles.modal__line}></div>
                <div className={styles.modal__content}>
                    {creditsJson.map((item) => (
                        <ModalCreditsElement key={nanoid()} title={item.title} textContent={item.text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export { ModalCredits };
