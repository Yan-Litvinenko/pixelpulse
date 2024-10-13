import React from 'react';
import styles from '@/styles/components/logsElement/LogsElement.module.scss';
import type { LogsElementProps } from '@/interface/logs/Logs.interface';

const LogsElement = (props: LogsElementProps): React.JSX.Element => {
    const { className, textContent, date } = props;

    return (
        <article className={`${styles.element} ${className}`}>
            <h3 className={styles.element__title}>{textContent}</h3>
            <time className={styles.element__date} dateTime={date}>
                date:{date}
            </time>
        </article>
    );
};

export { LogsElement };
