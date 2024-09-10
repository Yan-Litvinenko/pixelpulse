import React, { Suspense } from 'react';
import styles from './LogsOld.module.scss';
import { Await, useLoaderData } from 'react-router-dom';
import { getReplacementCommits, transformCommits } from '../logs/logsLoader';
import { LogsElement } from '../logsElement/LogsElement';
import { nanoid } from '@reduxjs/toolkit';
import type { IGithubRespone } from '../../interfaces/interface.github';
import type { ResolveError } from '../../interfaces/interface';

const LogsOld = (): React.JSX.Element => {
    const { githubCommits } = useLoaderData() as {
        githubCommits: IGithubRespone[] | ResolveError;
    };

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
