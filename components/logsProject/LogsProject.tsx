import React from 'react';
import getLastUpdate from '@/helpers/logs/getLastUpdate';
import styles from '@/styles/components/logsProject/LogsProject.module.scss';
import { LogsElement } from '../logsElement/LogsElement';
import type { GithubRespone } from '@/interface/logs/Github.interface';

export default function LogsProject({ commits }: { commits: GithubRespone[] }): React.JSX.Element {
    return (
        <ul className={styles.project}>
            <LogsElement
                className={styles.project__title}
                date={commits.length && commits ? getLastUpdate(commits as GithubRespone[]) : 'error'}
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
}
