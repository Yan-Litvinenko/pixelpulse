import React from 'react';
import LogsElement from '../logsElement/LogsElement';
import { nanoid } from 'nanoid';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import { ICommitLog } from '../../interfaces/interface.github';
import styles from './LogsOld.module.scss';

const LogsOld = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    let message = 'connection error';
    let commits: ICommitLog[] = contextApp.commits;

    if (contextApp.isLoadingGithub) message = 'loading';

    return (
        <div>
            <span className={styles.title}>older logs:</span>
            <ul className={styles.list}>
                {commits.length === 0 ? (
                    <>
                        {Array.from({ length: 5 }).map(() => (
                            <LogsElement key={nanoid()} date={message} textContent={message} />
                        ))}
                    </>
                ) : (
                    <>
                        {console.log('всё ок')}
                        {commits.map((item) => (
                            <LogsElement key={nanoid()} date={item.date} textContent={item.message} />
                        ))}
                    </>
                )}
            </ul>
        </div>
    );
};

export default LogsOld;
