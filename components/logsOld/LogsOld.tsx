'use client';

import React from 'react';
import styles from '@/styles/components/logsOld/LogsOld.module.scss';
import { LogsElement } from '../logsElement/LogsElement';
import { nanoid } from '@reduxjs/toolkit';
import type { GithubTransformCommits } from '@/interface/logs/Github.interface';

export default function LogsOld({ commits }: { commits: GithubTransformCommits[] }): React.JSX.Element {
    return (
        <section>
            <h4 className={styles.title}>older logs:</h4>
            <div className={styles.list}>
                {commits.map((commit) => (
                    <LogsElement
                        key={nanoid()}
                        className={'null'}
                        date={commit.committedDate || 'error'}
                        textContent={commit.message || 'error'}
                    />
                ))}
            </div>
        </section>
    );
}
