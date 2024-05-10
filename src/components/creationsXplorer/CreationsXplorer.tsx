import React from 'react';
import CreationsXplorerContent from '../creationsXplorerContent/CreationsXplorerContent';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import { IProject, XplorerState } from '../../interfaces/interface.credits';
import styles from './CreationsXplorer.module.scss';

interface IXplorer {
    projectCount: number;
    projects: IProject[];
    setProjectCount: React.Dispatch<React.SetStateAction<number>>;
    setXplorerState: React.Dispatch<React.SetStateAction<XplorerState>>;
    xplorerState: XplorerState;
}

const Xplorer = ({
    projectCount,
    projects,
    setProjectCount,
    setXplorerState,
    xplorerState,
}: IXplorer): React.JSX.Element => {
    const path: string = `location: /projects${xplorerState === 'projectImages' ? '/' + projects[projectCount].name : ''}`;

    return (
        <div className={styles.xplorer}>
            <Heading className={styles.xplorer__title} level="3" textContent="file xplorer" />
            <Heading className={styles.xplorer__path} level="4" textContent={path} />

            <CreationsXplorerContent
                projectCount={projectCount}
                projects={projects}
                setProjectCount={setProjectCount}
                setXplorerState={setXplorerState}
                xplorerState={xplorerState}
            />

            <Frame />
        </div>
    );
};

export default Xplorer;
