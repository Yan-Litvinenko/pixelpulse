import React from 'react';
import ModalCreditsElement from '../modalCreditsElement/ModalCreditsElement';
import { nanoid } from 'nanoid';
import { useAppContext } from '../../hooks/useAppContext';
import creditsJson from '../../assets/json/credits.json';
import styles from './ModalCredits.module.scss';

const ModalCredits = (): React.JSX.Element => {
    const { credits } = useAppContext();

    return (
        <div className={styles.modal} onClick={credits.closeModal}>
            <div className={styles.modal__inner} onClick={credits.stopPropagation}>
                <h3 className={styles.modal__title}>Credits</h3>
                <h4 className={styles.modal__subtitle}>Everything involved in this project</h4>
                <div className={styles.modal__line}></div>
                <div className={styles.modal__content}>
                    {creditsJson.map((item) => (
                        <ModalCreditsElement key={nanoid()} title={item.title} text={item.text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModalCredits;
