import React, { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { getLastUpdate } from '../logs/logsLoader';
import { IGithubRespone } from '../../interfaces/interface.github';
import { LogsElement } from '../logsElement/LogsElement';
import { ResolveError } from '../../interfaces/interface.loader';
import styles from './LogsProject.module.scss';

const LogsProject = (): React.JSX.Element => {
    const { githubCommits } = useLoaderData() as { githubCommits: IGithubRespone[] };

    return (
        <ul className={styles.project}>
            <Suspense
                fallback={
                    <LogsElement
                        className={styles.project__title}
                        date={'loading'}
                        textContent={'LOG ENTRY: PROJECT DEVELOPMENT UPDATE'}
                    />
                }
            >
                <Await resolve={githubCommits}>
                    {(resolveGithubCommits: ResolveError | IGithubRespone[]) => {
                        if ((resolveGithubCommits as ResolveError).status === '404') {
                            return (
                                <LogsElement
                                    className={styles.project__title}
                                    date={'error loading'}
                                    textContent={'LOG ENTRY: PROJECT DEVELOPMENT UPDATE'}
                                />
                            );
                        }
                        return (
                            <LogsElement
                                className={styles.project__title}
                                date={getLastUpdate(resolveGithubCommits as IGithubRespone[])}
                                textContent={'LOG ENTRY: PROJECT DEVELOPMENT UPDATE'}
                            />
                        );
                    }}
                </Await>
            </Suspense>
            <li className={styles.project__item}>
                LOCATION: <span>Belarus</span>
            </li>
            <li className={styles.project__item}>
                PROJECT STATUS: <span>In Development</span>
            </li>
        </ul>
    );
};

export { LogsProject };
