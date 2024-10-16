'use client';

import React from 'react';
import { LogsElement } from '../logsElement/LogsElement';
import { nanoid } from '@reduxjs/toolkit';
import type { GithubTransformCommits } from '@/interface/logs/Github.interface';

export default function LogsOld({ commits }: { commits: GithubTransformCommits[] }): React.JSX.Element {
    return (
        <section className="logs_old">
            <h4 className={'logs_old__title'}>older logs:</h4>
            <div className={'logs_old__list'}>
                {commits.map((commit) => (
                    <LogsElement
                        key={nanoid()}
                        className={''}
                        date={commit.committedDate || 'error'}
                        textContent={commit.message || 'error'}
                    />
                ))}
            </div>
        </section>
    );
}
