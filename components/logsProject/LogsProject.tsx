import React from 'react';
import getLastUpdate from '@/helpers/logs/getLastUpdate';
import styles from '@/styles/components/logsProject/LogsProject.module.scss';
import { LogsElement } from '../logsElement/LogsElement';
import type { GithubRespone } from '@/interface/logs/Github.interface';

export default function LogsProject({ commits }: { commits: GithubRespone[] }): React.JSX.Element {
    return (
        <section className={styles.project}>
            <LogsElement
                className={styles.project__title}
                date={commits.length && commits ? getLastUpdate(commits as GithubRespone[]) : 'error'}
                textContent={'LOG ENTRY: PROJECT DEVELOPMENT UPDATE'}
            />
            <article className={styles.project__item}>
                <h4>LOCATION:</h4>
                <h3>Belarus</h3>
            </article>
            <article className={styles.project__item}>
                <h4>PROJECT STATUS:</h4> <h3>In Development</h3>
            </article>
        </section>
    );
}
