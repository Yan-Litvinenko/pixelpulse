import React from 'react';
import LogsElement from '../logsElement/LogsElement';
import styles from './Project.module.scss';
import { IGithubRespone } from '../../interfaces/interfaces';
import handleCommit from '../../utils/handleCommit';

interface IProject {
    commits: IGithubRespone[] | undefined;
}

const Project = ({ commits }: IProject): React.JSX.Element => {
    let lastCommit: Record<string, string> | undefined = undefined;

    if (commits) {
        lastCommit = handleCommit(commits[0].commit);
    }

    return (
        <ul className={styles.project}>
            <LogsElement
                className={styles.project__title}
                date={lastCommit?.date ? lastCommit.date : ''}
                textContent={lastCommit?.message ? lastCommit.message : ''}
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

export default Project;
