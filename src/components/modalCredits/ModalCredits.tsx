import React from 'react';
import { ContextApp } from '../app/App';
import useCloseModalAndKey from '../../hooks/useCloseModalAndKey';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import { nanoid } from 'nanoid';
import { IAppContext } from '../../interfaces/interface';
import credits from '../../assets/json/credits.json';
import styles from './ModalCredits.module.scss';

const ModalCredits = (): React.JSX.Element => {
    const modal: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (contextApp) {
        useCloseModalAndKey(modal, contextApp?.setCredits, false, false, false);
    }

    return (
        <div className={styles.modal} ref={modal}>
            <div className={styles.modal__inner}>
                <Heading className={styles.modal__title} textContent="Credits" level="3" />
                <Heading
                    className={styles.modal__subtitle}
                    level="4"
                    textContent="Everything involved in this project"
                />
                <div className={styles.modal__line}></div>
                <div className={styles.modal__content}>
                    {credits.map((item) => (
                        <ModalElement key={nanoid()} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface ICreditItem {
    title: string;
    text: string | string[];
}

function ModalElement({ item }: { item: ICreditItem }): React.ReactElement {
    return (
        <div className={styles.modal__item}>
            <Heading className={styles.modal__item_title} textContent={item.title} level={'4'} />

            <div className={styles.modal__text_box}>
                {Array.isArray(item.text) ? (
                    item.text.map((textElement) => (
                        <Paragraph key={nanoid()} className={styles.modal__text} textContent={textElement} />
                    ))
                ) : (
                    <Paragraph key={nanoid()} className={styles.modal__text} textContent={item.text} />
                )}
            </div>
        </div>
    );
}

export default ModalCredits;
