import React from 'react';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import LogsElement from '../logsElement/LogsElement';
import styles from './LogsProject.module.scss';
import useStatusData from '../../hooks/useStatusData';

const LogsProject = (): React.JSX.Element => {
    const contextApp: IContextApp | null = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { isLoadingGithub, errorGithub, commits } = contextApp;
    const { message } = useStatusData({
        error: errorGithub,
        load: isLoadingGithub,
        successMessage: commits.length ? commits[0].date : '',
    });

    return (
        <ul className={styles.project}>
            <LogsElement
                className={styles.project__title}
                date={message}
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
