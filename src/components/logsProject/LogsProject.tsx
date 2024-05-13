import React from 'react';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import LogsElement from '../logsElement/LogsElement';
import styles from './LogsProject.module.scss';

const LogsProject = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    let lastDate: string = 'error connection';

    if (contextApp.isLoadingGithub) lastDate = 'loading';
    if (contextApp.commits[0]) lastDate = contextApp.commits[0].date;

    return (
        <ul className={styles.project}>
            <LogsElement
                className={styles.project__title}
                date={lastDate}
                textContent={'LOG ENTRY: PROJECT DEVELOPMENT UPDATE'}
            />
            <li className={styles.project__item}>
                LOCATION: <span>Belarus</span>
            </li>
            <li className={styles.project__item}>
                PROJECT STATUS: <span>In Development</span>
            </li>
        </ul>
    );
};

export default LogsProject;
