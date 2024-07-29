import React from 'react';
import { IAboutElement } from '../../interfaces/interface.component';
import styles from './AboutElement.module.scss';

const AboutElement = (props: IAboutElement): React.JSX.Element => {
    const { title, text } = props;

    return (
        <div className={styles.item}>
            <h3 className={styles.item__title}>{title}</h3>
            <p className={styles.item__text}>{text}</p>
        </div>
    );
};

export { AboutElement };
