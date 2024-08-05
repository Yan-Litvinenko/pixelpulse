import React from 'react';
import styles from './Logs.module.scss';
import { LogsOld } from '../logsOld/LogsOld';
import { LogsProject } from '../logsProject/LogsProject';
import { LogsUpdate } from '../logsUpdate/LogsUpdate';
import { useAppContext } from '../../hooks/useAppContext';

const Logs = (): React.JSX.Element => {
    const { handleSoundClick } = useAppContext();

    return (
        <main className={styles.logs}>
            <>
                <div className={styles.logs__inner}>
                    <h1 className={styles.logs__title}>data log dump initialized</h1>

                    <LogsProject />
                    <LogsUpdate />

                    <a
                        className={styles.logs__github}
                        href="https://github.com/Darth-VaderX"
                        onClick={handleSoundClick}
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

export { Logs };
