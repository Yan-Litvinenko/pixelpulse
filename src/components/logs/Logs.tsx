import React from 'react';
import styles from './Logs.module.scss';
import { LogsOld } from '../logsOld/LogsOld';
import { LogsProject } from '../logsProject/LogsProject';
import { LogsUpdate } from '../logsUpdate/LogsUpdate';
import { soundsClickTrigger } from '../../store/slices/soundsSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';

const Logs = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <section className={styles.logs}>
            <>
                <div className={styles.logs__inner}>
                    <h2 className={styles.logs__title}>data log dump initialized</h2>

                    <LogsProject />
                    <LogsUpdate />

                    <a
                        className={styles.logs__github}
                        href="https://github.com/Yan-Litvinenko"
                        onClick={() => dispatch(soundsClickTrigger())}
                        target="_blank"
                    >
                        github.com
                    </a>

                    <LogsOld />
                </div>
            </>
        </section>
    );
};

export { Logs };
