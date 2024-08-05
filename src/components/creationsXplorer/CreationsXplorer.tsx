import React from 'react';
import styles from './CreationsXplorer.module.scss';
import { Frame } from '../frame/Frame';
import { Outlet, useParams } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import type { ICreationsXplorer } from '../../interfaces/interface.creations';

const CreationsXplorer = (props: ICreationsXplorer): React.JSX.Element => {
    const { targetProject } = useAppContext();
    const { projectName } = useParams();
    const { projects } = props;
    const path: string = `location: /projects${projectName ? '/' + projects[targetProject].name : ''}`;

    return (
        <div className={styles.xplorer}>
            <h3 className={styles.xplorer__title}>file xplorer</h3>
            <h4 className={styles.xplorer__path}>{path}</h4>

            <Outlet />
            <Frame />
        </div>
    );
};

export { CreationsXplorer };
