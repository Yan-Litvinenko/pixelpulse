import React from 'react';
import LogsElement from '../logsElement/LogsElement';
import { ICommitLog } from '../../interfaces/interface';
import styles from './LogsOld.module.scss';
import { nanoid } from 'nanoid';

interface IOldLogs {
    commits: ICommitLog[] | undefined;
}

const LogsOld = ({ commits }: IOldLogs): React.JSX.Element => {
    return (
        <div>
            <span className={styles.title}>older logs:</span>
            <ul className={styles.list}>
                {commits?.map((item) => {
                    return <LogsElement key={nanoid()} date={item.date} textContent={item.message} />;
                })}
            </ul>
        </div>
    );
};

export default LogsOld;
