import React from 'react';
import styles from './ModalCreditsElement.module.scss';
import { nanoid } from '@reduxjs/toolkit';
import type { ICreditItem } from '../../interfaces/interface.component';

const ModalCreditsElement = (props: ICreditItem): React.ReactElement => {
    const { title, text } = props;
    return (
        <div className={styles.item}>
            <h4 className={styles.item_title}>{title}</h4>
            <div className={styles.item__text_box}>
                {Array.isArray(text) ? (
                    text.map((textElement) => {
                        return (
                            <p key={nanoid()} className={styles.modal__text}>
                                {textElement}
                            </p>
                        );
                    })
                ) : (
                    <p className={styles.modal__text}>{text}</p>
                )}
            </div>
        </div>
    );
};

export { ModalCreditsElement };
