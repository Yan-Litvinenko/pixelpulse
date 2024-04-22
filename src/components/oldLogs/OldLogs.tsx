import React from 'react';
import LogsElement from '../logsElement/LogsElement';
import { IGithubRespone, ICommitLog } from '../../interfaces/interfaces';
import styles from './OldLogs.module.scss';
import handleCommit from '../../utils/handleCommit';
import { nanoid } from 'nanoid';

interface IOldLogs {
    commits: IGithubRespone[] | undefined;
}

const OldLogs = ({ commits }: IOldLogs): React.JSX.Element => {
    return (
        <div>
            <span className={styles.title}>older logs:</span>
            <ul className={styles.list}>
                {commits?.map((item) => {
                    const commit: ICommitLog | undefined = handleCommit(item.commit);
                    return <LogsElement key={nanoid()} date={commit?.date} textContent={commit?.message} />;
                })}
            </ul>
        </div>
    );
};

export default OldLogs;
