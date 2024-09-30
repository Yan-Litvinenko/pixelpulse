import React from 'react';
import styles from '@/styles/components/logsElement/LogsElement.module.scss';
import type { LogsElementProps } from '@/interface/logs/Logs.interface';

const LogsElement = (props: LogsElementProps): React.JSX.Element => {
    const { className, textContent, date } = props;

    return (
        <li className={`${styles.element} ${className}`}>
            <h3 className={styles.element__title}>{textContent}</h3>
            <span className={styles.element__date}>date:{date}</span>
        </li>
    );
};

export { LogsElement };
