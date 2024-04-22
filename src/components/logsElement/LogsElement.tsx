import React from 'react';
import Heading from '../heading/Heading';
import styles from './LogsElement.module.scss';

interface ILogsElement {
    className?: string;
    date: string | undefined;
    textContent: string | undefined;
}

const LogsElement = (props: ILogsElement): React.JSX.Element => {
    return (
        <li className={`${styles.element} ${props.className && props.className}`}>
            <Heading
                className={styles.element__title}
                level="4"
                textContent={props.textContent ? props.textContent : ''}
            />
            <span className={styles.element__date}>date:{props.date}</span>
        </li>
    );
};

export default LogsElement;
