import React, { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { getReplacementCommits, transformCommits } from '../logs/logsLoader';
import { IGithubRespone } from '../../interfaces/interface.github';
import { LogsElement } from '../logsElement/LogsElement';
import { nanoid } from 'nanoid';
import { ResolveError } from '../../interfaces/interface.loader';
import styles from './LogsOld.module.scss';

const LogsOld = (): React.JSX.Element => {
    const { githubCommits } = useLoaderData() as { githubCommits: IGithubRespone[] | ResolveError };

    return (
        <div>
            <span className={styles.title}>older logs:</span>
            <ul className={styles.list}>
                <Suspense
                    fallback={getReplacementCommits('loading').map((item) => (
                        <LogsElement key={nanoid()} className={''} date={item.date} textContent={item.message} />
                    ))}
                >
                    <Await resolve={githubCommits}>
                        {(resolveCommits: ResolveError | IGithubRespone[]) => {
                            if ((resolveCommits as ResolveError).status === '404') {
                                return getReplacementCommits('error loading').map((commit) => (
                                    <LogsElement
                                        key={nanoid()}
                                        className={''}
                                        date={commit.date}
                                        textContent={commit.message}
                                    />
                                ));
                            }

                            return transformCommits(resolveCommits as IGithubRespone[]).map((commit) => (
                                <LogsElement
                                    key={nanoid()}
                                    className={''}
                                    date={commit.date}
                                    textContent={commit.message}
                                />
                            ));
                        }}
                    </Await>
                </Suspense>
            </ul>
        </div>
    );
};

export { LogsOld };
