import React from 'react';
import CreationsXplorerContent from '../creationsXplorerContent/CreationsXplorerContent';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import { IProject, XplorerState } from '../../interfaces/interface.credits';
import styles from './CreationsXplorer.module.scss';

interface IXplorer {
    projects: IProject[];
    setXplorerState: React.Dispatch<React.SetStateAction<XplorerState>>;
    xplorerState: XplorerState;
}

const Xplorer = ({ projects, setXplorerState, xplorerState }: IXplorer): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const path: string = `location: /projects${xplorerState === 'projectImages' ? '/' + projects[contextApp.modalProject].name : ''}`;

    return (
        <div className={styles.xplorer}>
            <Heading className={styles.xplorer__title} level="3" textContent="file xplorer" />
            <Heading className={styles.xplorer__path} level="4" textContent={path} />

            <CreationsXplorerContent
                projects={projects}
                setXplorerState={setXplorerState}
                xplorerState={xplorerState}
            />

            <Frame />
        </div>
    );
};

export default Xplorer;
