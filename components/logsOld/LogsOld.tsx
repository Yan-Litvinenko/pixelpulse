'use client';

import React from 'react';
import transformCommits from '@/helpers/logs/transformCommits';
import styles from '@/styles/components/logsOld/LogsOld.module.scss';
import { LogsElement } from '../logsElement/LogsElement';
import { nanoid } from '@reduxjs/toolkit';
import type { CommitTransform, GithubRespone } from '@/interface/logs/Github.interface';

export default function LogsOld({ commits }: { commits: GithubRespone[] }): React.JSX.Element {
    return (
        <article>
            <h4 className={styles.title}>older logs:</h4>
            <ul className={styles.list}>
                {transformCommits(commits).map((commit) => (
                    <LogsElement
                        key={nanoid()}
                        className={'null'}
                        date={(commit as CommitTransform).date || 'error'}
                        textContent={(commit as CommitTransform).message || 'error'}
                    />
                ))}
            </ul>
        </article>
    );
}
