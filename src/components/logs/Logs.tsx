import React from 'react';
import { ContextApp } from '../app/App';
import LogsOld from '../logsOld/LogsOld';
import LogsProject from '../logsProject/LogsProject';
import LogsUpdate from '../logsUpdate/LogsUpdate';
import { IAppContext } from '../../interfaces/interface';
import styles from './Logs.module.scss';

const Logs = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    return (
        <main className={styles.logs}>
            <>
                <div className={styles.logs__inner}>
                    <h2 className={styles.logs__title}>data log dump initialized</h2>
                    <LogsProject />
                    <LogsUpdate />
                    <a
                        className={styles.logs__github}
                        href="https://github.com/Darth-VaderX"
                        onClick={() => contextApp?.handleSoundClick()}
                        target="_blank"
                    >
                        github.com
                    </a>
                    <LogsOld />
                </div>
            </>
        </main>
    );
};

export default Logs;
