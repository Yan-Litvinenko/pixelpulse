import React from 'react';
import { ContextApp } from '../app/App';
import CreationsXplorerItem from '../CreationsXplorerItem/CreationsXplorerItem';
import handleOpenModal from '../../utils/handleOpenModal';
import { nanoid } from 'nanoid';
import { IProject, XplorerState } from '../../interfaces/interface.credits';
import { IAppContext } from '../../interfaces/interface';
import styles from './CreationsXplorerContent.module.scss';

interface ICreationsXplorerContent {
    projects: IProject[];
    setXplorerState: React.Dispatch<React.SetStateAction<XplorerState>>;
    xplorerState: XplorerState;
}

const CreationsXplorerContent = ({
    projects,
    setXplorerState,
    xplorerState,
}: ICreationsXplorerContent): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const handleChangeProject = (index: number): void => {
        setXplorerState('projectImages');
        contextApp?.setProjectImages(projects[contextApp.modalProjectImage].images);
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
                    : projects[contextApp.modalProject].images.map((imageName, index) => {
                          return (
                              <CreationsXplorerItem
                                  image={'image'}
                                  key={nanoid()}
                                  onClick={() => {
                                      handleOpenModal(contextApp?.setCreations);
                                      contextApp?.setModalProjectImage(index);
                                      contextApp?.handleSoundModal();
                                  }}
                                  textContent={imageName}
                              />
                          );
                      })}
            </ul>
        </>
    );
};

export default CreationsXplorerContent;
