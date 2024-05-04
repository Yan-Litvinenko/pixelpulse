import React from 'react';
import LogsElement from '../logsElement/LogsElement';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import styles from './LogsOld.module.scss';
import { nanoid } from 'nanoid';

const LogsOld = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    return (
        <div>
            <span className={styles.title}>older logs:</span>
            <ul className={styles.list}>
                {contextApp.errorGithub && (
                    <>
                        {Array.from({ length: 7 }).map(() => (
                            <LogsElement key={nanoid()} date="connection error" textContent="connection error" />
                        ))}
                    </>
                )}
                {contextApp.isLoadingGithub && (
                    <>
                        {Array.from({ length: 7 }).map(() => (
                            <LogsElement key={nanoid()} date="loading" textContent="loading" />
                        ))}
                    </>
                )}
                {!contextApp.errorGithub && !contextApp.isLoadingGithub && (
                    <>
                        {contextApp.commits?.map((item) => (
                            <LogsElement key={nanoid()} date={item.date} textContent={item.message} />
                        ))}
                    </>
                )}
            </ul>
        </div>
    );
};

export default LogsOld;
