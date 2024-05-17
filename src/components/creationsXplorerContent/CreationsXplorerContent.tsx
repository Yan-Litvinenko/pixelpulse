import React from 'react';
import { ContextApp } from '../app/App';
import CreationsXplorerItem from '../creationsXplorerItem/CreationsXplorerItem';
import handleOpenModal from '../../utils/handleOpenModal';
import { nanoid } from 'nanoid';
import { IProject, XplorerState } from '../../interfaces/interface.credits';
import { IAppContext } from '../../interfaces/interface';
import styles from './CreationsXplorerContent.module.scss';

interface ICreationsXplorerContent {
    projectCount: number;
    projects: IProject[];
    setProjectCount: React.Dispatch<React.SetStateAction<number>>;
    setXplorerState: React.Dispatch<React.SetStateAction<XplorerState>>;
    xplorerState: XplorerState;
}

const CreationsXplorerContent = ({
    projectCount,
    projects,
    setProjectCount,
    setXplorerState,
    xplorerState,
}: ICreationsXplorerContent): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    const handleChangeProject = (index: number): void => {
        setProjectCount(index);
        setXplorerState('projectImages');
        contextApp?.setProjectImages(projects[projectCount].images);
        contextApp?.setModalProject(index);
        contextApp?.handleSoundClick();
    };

    return (
        <>
            <ul className={styles.content}>
                {projects.length === 0 ? <span className={styles.not_content}>No projects have been added</span> : null}
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
                                  onClick={() => handleOpenModal(contextApp?.setCreations)}
                                  textContent={imageName + '.jpg'}
                              />
                          );
                      })}
            </ul>
        </>
    );
};

export default CreationsXplorerContent;
