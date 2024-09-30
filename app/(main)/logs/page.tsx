import React from 'react';
import loadCommits from '@/helpers/logs/loadCommits';
import LogsLink from '@/components/logsLink/LogsLink';
import LogsUpdate from '@/components/LogsUpdate/LogsUpdate';
import LogsOld from '@/components/logsOld/LogsOld';
import LogsProject from '@/components/logsProject/LogsProject';
import styles from '@/styles/components/logs/Logs.module.scss';
import type { GithubRespone } from '@/interface/logs/Github.interface';
import type { UpdateItem } from '@/interface/logs/Logs.interface';
import type { Metadata } from 'next';

const update: UpdateItem[] = [
    {
        title: 'project update',
        text: 'I continue to actively work on improving the quality of the application. I am constantly working to improve the readability, structure and performance of the code.',
    },
    {
        title: 'challenges',
        text: 'Maximum test coverage of the application, as well as integration of Next.js, Three.js.',
    },
    {
        title: 'next steps',
        text: 'Creation of 3D animation and mini-games. Adding more flexible settings. Creating and adding pet projects that will tell about my skills.',
    },
    {
        title: 'conclusion',
        text: 'In conclusion, i would like to say that my project represents my passion and diligence. I am excited to see the impact it will have and am committed to continuing to strive for excellence.',
    },
];

export const metadata: Metadata = {
    title: 'Logs',
    description: 'Project updates, its status, development location0, next step, logs from Github',
    openGraph: {
        title: 'Logs',
        url: 'https://pixelpulse.by/logs',
    },
    twitter: {
        title: 'Logs',
        description: 'Project updates, its status, development location0, next step, logs from Github',
    },
};

export default async function Logs(): Promise<React.JSX.Element> {
    const commits: GithubRespone[] = await loadCommits();

    return (
        <section className={styles.logs}>
            <>
                <div className={styles.logs__inner}>
                    <h2 className={styles.logs__title}>data log dump initialized</h2>

                    <LogsProject commits={commits} />
                    <LogsUpdate update={update} />
                    <LogsLink />
                    <LogsOld commits={commits} />
                </div>
            </>
        </section>
    );
}
