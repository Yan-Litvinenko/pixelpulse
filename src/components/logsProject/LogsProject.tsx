import React from 'react';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import LogsElement from '../logsElement/LogsElement';
import styles from './LogsProject.module.scss';
import useStatusData from '../../hooks/useStatusData';

const LogsProject = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { isLoadingGithub, errorGithub } = contextApp;
    const { message } = useStatusData({
        error: errorGithub,
        load: isLoadingGithub,
        successMessage: contextApp.commits.length ? contextApp.commits[0].date : '',
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
