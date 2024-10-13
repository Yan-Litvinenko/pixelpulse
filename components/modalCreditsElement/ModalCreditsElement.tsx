import React from 'react';
import styles from '@/styles/components/modalCreditsElement/ModalCreditsElement.module.scss';
import type { ModalCreditsElementProps } from '@/interface/modal/modal.interface';

export default function ModalCreditsElement(props: ModalCreditsElementProps): React.ReactElement {
    const { title, text } = props;

    return (
        <div className={styles.item}>
            <h4 className={styles.item__title}>{title}</h4>
            <div className={styles.item__text_box}>
                {Array.isArray(text) ? (
                    text.map((textElement) => {
                        return (
                            <p key={textElement} className={styles.item__text}>
                                {textElement}
                            </p>
                        );
                    })
                ) : (
                    <p className={styles.item__text}>{text}</p>
                )}
            </div>
        </div>
    );
}
