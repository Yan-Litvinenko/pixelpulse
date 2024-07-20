import React from 'react';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import useCloseModal from '../../hooks/useCloseModal';
import ModalCreditsElement from '../modalCreditsElement/ModalCreditsElement';
import { nanoid } from 'nanoid';
import credits from '../../assets/json/credits.json';
import styles from './ModalCredits.module.scss';

const ModalCredits = (): React.JSX.Element => {
    const contextApp: IContextApp | null = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { setCredits } = contextApp;
    const modal: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

    useCloseModal(modal, setCredits, false, false, false);

    return (
        <div className={styles.modal} ref={modal}>
            <div className={styles.modal__inner}>
                <h3 className={styles.modal__title}>Credits</h3>
                <h4 className={styles.modal__subtitle}>Everything involved in this project</h4>
                <div className={styles.modal__line}></div>
                <div className={styles.modal__content}>
                    {credits.map((item) => (
                        <ModalCreditsElement key={nanoid()} title={item.title} text={item.text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModalCredits;
