import React from 'react';
import styles from './LogsElement.module.scss';
import type { ILogsElement } from '../../interfaces/interface.component';

const LogsElement = (props: ILogsElement): React.JSX.Element => {
    const { className, textContent, date } = props;

    return (
        <li className={`${styles.element} ${className}`}>
            <h3 className={styles.element__title}>{textContent}</h3>
            <span className={styles.element__date}>date:{date}</span>
        </li>
    );
};

export { LogsElement };
