import React, { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { getLoadingCommits, transformCommits } from '../logs/logsLoader';
import { IGithubRespone } from '../../interfaces/interface.github';
import { LogsElement } from '../logsElement/LogsElement';
import { nanoid } from 'nanoid';
import styles from './LogsOld.module.scss';

const LogsOld = (): React.JSX.Element => {
    const { githubCommits } = useLoaderData() as { githubCommits: IGithubRespone[] };

    return (
        <div>
            <span className={styles.title}>older logs:</span>
            <ul className={styles.list}>
                <Suspense
                    fallback={getLoadingCommits().map((item) => (
                        <LogsElement key={nanoid()} className={''} date={item.date} textContent={item.message} />
                    ))}
                >
                    <Await resolve={githubCommits}>
                        {(resolveCommits) =>
                            transformCommits(resolveCommits as IGithubRespone[]).map((commit) => (
                                <LogsElement
                                    key={nanoid()}
                                    className={''}
                                    date={commit.date}
                                    textContent={commit.message}
                                />
                            ))
                        }
                    </Await>
                </Suspense>
            </ul>
        </div>
    );
};

export { LogsOld };
