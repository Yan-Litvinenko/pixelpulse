import React from 'react';
import creditsJson from '../../assets/json/credits.json';
import styles from './ModalCredits.module.scss';
import { ModalCreditsElement } from '../modalCreditsElement/ModalCreditsElement';
import { nanoid } from '@reduxjs/toolkit';
import { soundsModalTrigger } from '../../store/slices/soundsSlice';
import { stopPropagation } from '../../utils/stopPropagation';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../hooks/useModal';
import { stateModalSelector } from '../../store/selectors';

const ModalCredits = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const { delay } = useSelector(stateModalSelector);

    const isDelayEnd = Object.values(delay).some((modalDelay) => {
        return modalDelay === true;
    });

    const closeModalCredits = useModal('credits').close;
    const closeModalWithSounds = () => {
        closeModalCredits();
        if (isDelayEnd) dispatch(soundsModalTrigger());
    };

    return (
        <div className={styles.modal} onClick={closeModalWithSounds}>
            <div className={styles.modal__inner} onClick={stopPropagation}>
                <h3 className={styles.modal__title}>Credits</h3>
                <h4 className={styles.modal__subtitle}>
                    Everything involved in this project
                </h4>
                <div className={styles.modal__line}></div>
                <div className={styles.modal__content}>
                    {creditsJson.map((item) => (
                        <ModalCreditsElement
                            key={nanoid()}
                            title={item.title}
                            textContent={item.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export { ModalCredits };
