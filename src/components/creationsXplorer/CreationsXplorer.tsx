import React from 'react';
import Heading from '../heading/Heading';
import Frame from '../frame/Frame';
import { nanoid } from 'nanoid';
import { IProject, XplorerState } from '../../interfaces/interface.credits';
import styles from './CreationsXplorer.module.scss';

interface IXplorer {
    projects: IProject[];
    projectCount: number;
    setProjectCount: React.Dispatch<React.SetStateAction<number>>;
    setXplorerState: React.Dispatch<React.SetStateAction<XplorerState>>;
    xplorerState: XplorerState;
}

const Xplorer = ({
    projects,
    projectCount,
    setProjectCount,
    setXplorerState,
    xplorerState,
}: IXplorer): React.JSX.Element => {
    const path: string = `location: /projects${xplorerState === 'projectImages' ? '/' + projects[projectCount].name : ''}`;

    const handleProject = (index: number): void => {
        setProjectCount(index);
        setXplorerState('projectImages');
    };

    return (
        <div className={styles.xplorer}>
            <Heading className={styles.xplorer__title} level="3" textContent="file xplorer" />
            <Heading className={styles.xplorer__path} level="4" textContent={path} />
            <ul className={styles.xplorer__content}>
                {xplorerState === 'projects'
                    ? projects.map((project, index) => {
                          return (
                              <li
                                  className={styles.xplorer__item_project}
                                  key={nanoid()}
                                  onClick={() => handleProject(index)}
                              >
                                  {project.name}
                              </li>
                          );
                      })
                    : projects[projectCount].images.map((imageName) => {
                          return (
                              <li className={styles.xplorer__item_project} key={nanoid()} onClick={() => {}}>
                                  {imageName + '.jpg'}
                              </li>
                          );
                      })}
            </ul>
            <Frame />
        </div>
    );
};

export default Xplorer;
