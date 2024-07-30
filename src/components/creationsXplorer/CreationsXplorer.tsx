import React from 'react';
import { Frame } from '../frame/Frame';
import { ICreationsXplorer } from '../../interfaces/interface.creations';
import { Outlet, useParams } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './CreationsXplorer.module.scss';

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
