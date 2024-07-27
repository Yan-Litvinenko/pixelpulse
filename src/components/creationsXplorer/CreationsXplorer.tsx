import React from 'react';
import { CreationsXplorerContent } from '../creationsXplorerContent/CreationsXplorerContent';
import { Frame } from '../frame/Frame';
import { useAppContext } from '../../hooks/useAppContext';
import { ICreationsXplorer } from '../../interfaces/interface.creations';
import styles from './CreationsXplorer.module.scss';

const CreationsXplorer = (props: ICreationsXplorer): React.JSX.Element => {
    const { targetProject } = useAppContext();
    const { projects, xplorerLocation } = props;
    const path: string = `location: /projects${xplorerLocation === 'projectImages' ? '/' + projects[targetProject].name : ''}`;

    return (
        <div className={styles.xplorer}>
            <h3 className={styles.xplorer__title}>file xplorer</h3>
            <h4 className={styles.xplorer__path}>{path}</h4>

            <CreationsXplorerContent {...props} />

            <Frame />
        </div>
    );
};

export { CreationsXplorer };
