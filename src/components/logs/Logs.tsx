import React, { useContext } from 'react';
import { ContextApp } from '../app/App';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import LogsOld from '../logsOld/LogsOld';
import LogsProject from '../logsProject/LogsProject';
import LogsUpdate from '../logsUpdate/LogsUpdate';
import { IAppContext, ICommitLog } from '../../interfaces/interface';
import styles from './Logs.module.scss';

const Logs = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = useContext(ContextApp);

    const getCommits = (): ICommitLog[] | undefined => {
        if (!contextApp) {
            return;
        }

        if (contextApp.isLoadingGithub) {
            return Array.from({ length: 5 }).fill({ message: 'loading', date: 'loading' }) as ICommitLog[];
        }

        return contextApp.commits as ICommitLog[];
    };

    return (
        <main className={styles.logs}>
            <Frame className={styles.logs__frame} />
            <div className={styles.logs__inner}>
                <Heading className={styles.logs__title} level="2" textContent="data log dump initialized." />
                <LogsProject commits={contextApp?.commits} />
                <LogsUpdate />
                <a className={styles.logs__github} href="https://github.com/Darth-VaderX" target="_blank">
                    github.com
                </a>
                <LogsOld commits={getCommits()} />
            </div>
        </main>
    );
};

export default Logs;
