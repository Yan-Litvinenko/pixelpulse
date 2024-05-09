import React from 'react';
import { ContextApp } from '../app/App';
import CreationsXplorerItem from '../CreationsXplorerItem/CreationsXplorerItem';
import Heading from '../heading/Heading';
import Frame from '../frame/Frame';
import scroll from '../../utils/scroll';
import { nanoid } from 'nanoid';
import { IProject, XplorerState } from '../../interfaces/interface.credits';
import { IAppContext } from '../../interfaces/interface';
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
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const path: string = `location: /projects${xplorerState === 'projectImages' ? '/' + projects[projectCount].name : ''}`;

    const handleChangeProject = (index: number): void => {
        setProjectCount(index);
        setXplorerState('projectImages');
        contextApp?.setProjectImages(projects[projectCount].images);
    };

    const handleOpenModal = (): void => {
        contextApp?.setCreations(true);
        scroll.off();
    };

    return (
        <div className={styles.xplorer}>
            <Heading className={styles.xplorer__title} level="3" textContent="file xplorer" />
            <Heading className={styles.xplorer__path} level="4" textContent={path} />

            <ul className={styles.xplorer__content}>
                {projects.length === 0 ? (
                    <span className={styles.xplorer__not_content}>No projects have been added</span>
                ) : null}
                {xplorerState === 'projects'
                    ? projects.map((project, index) => {
                          return (
                              <CreationsXplorerItem
                                  image={'folder'}
                                  key={nanoid()}
                                  onClick={() => handleChangeProject(index)}
                                  textContent={project.name}
                              />
                          );
                      })
                    : projects[projectCount].images.map((imageName) => {
                          return (
                              <CreationsXplorerItem
                                  image={'image'}
                                  key={nanoid()}
                                  onClick={handleOpenModal}
                                  textContent={imageName + '.jpg'}
                              />
                          );
                      })}
            </ul>
            <Frame />
        </div>
    );
};

export default Xplorer;
