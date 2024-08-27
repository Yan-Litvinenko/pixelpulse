import React from 'react';
import styles from './AboutElement.module.scss';
import type { IAboutElement } from '../../interfaces/interface.component';

const AboutElement = (props: IAboutElement): React.JSX.Element => {
    const { title, text } = props;

    return (
        <article className={styles.item}>
            <h3 className={styles.item__title}>{title}</h3>
            <p className={styles.item__text}>{text}</p>
        </article>
    );
};

export { AboutElement };
