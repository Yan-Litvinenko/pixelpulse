import React from 'react';
import styles from './CreationsXplorer.module.scss';
import { creationsSelector } from '../../store/selectors/selectors';
import { Frame } from '../frame/Frame';
import { Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CreationsXplorer = (): React.JSX.Element => {
    const { targetProject, projects } = useSelector(creationsSelector);
    const { projectName } = useParams();

    const path: string = `location: /projects${projectName ? '/' + projects[targetProject].name : ''}`;

    return (
        <section className={styles.xplorer}>
            <h3 className={styles.xplorer__title}>file xplorer</h3>
            <h4 className={styles.xplorer__path}>{path}</h4>

            <Outlet />
            <Frame />
        </section>
    );
};

export { CreationsXplorer };
