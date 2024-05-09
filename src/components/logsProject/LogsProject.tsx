import React from 'react';
import LogsElement from '../logsElement/LogsElement';
import { handleDate } from '../../utils/handleGithubRequest';
import { ICommitLog } from '../../interfaces/interface.github';
import styles from './LogsProject.module.scss';

interface IProject {
    commits: ICommitLog[] | undefined;
}

const LogsProject = ({ commits }: IProject): React.JSX.Element => {
    let lastDate: string = handleDate(`${new Date()}`);

    if (commits) {
        lastDate = commits[0].date;
    }

    return (
        <ul className={styles.project}>
            <LogsElement
                className={styles.project__title}
                date={lastDate}
                textContent={'LOG ENTRY: PROJECT DEVELOPMENT UPDATE'}
            />
            <li className={styles.project__item}>
                LOCATION: <span>Belarus</span>
            </li>
            <li className={styles.project__item}>
                PROJECT STATUS: <span>In Development</span>
            </li>
        </ul>
    );
};

export default LogsProject;
