import React from 'react';
import styles from '@/styles/components/aboutElement/AboutElement.module.scss';
import type { AboutElementProps } from '@/interface/about/about.interface';

export default function AboutElement(props: AboutElementProps): React.JSX.Element {
    const { title, textContent } = props;

    return (
        <article className={styles.item}>
            <h3 className={styles.item__title}>{title}</h3>
            <p className={styles.item__text}>{textContent}</p>
        </article>
    );
}
