import React from 'react';
import useStatusData from '../../hooks/useStatusData';
import LogsElement from '../logsElement/LogsElement';
import { nanoid } from 'nanoid';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import styles from './LogsOld.module.scss';

const LogsOld = (): React.JSX.Element => {
    const contextApp: IContextApp | null = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { errorGithub, isLoadingGithub, commits } = contextApp;
    const { message } = useStatusData({ error: errorGithub, load: isLoadingGithub, successMessage: '' });

    return (
        <div>
            <span className={styles.title}>older logs:</span>
            <ul className={styles.list}>
                {commits.length === 0 ? (
                    <>
                        {Array.from({ length: 5 }).map(() => (
                            <LogsElement key={nanoid()} className={''} date={message} textContent={message} />
                        ))}
                    </>
                ) : (
                    <>
                        {commits.map((item) => (
                            <LogsElement key={nanoid()} className={''} date={item.date} textContent={item.message} />
                        ))}
                    </>
                )}
            </ul>
        </div>
    );
};

export default LogsOld;
