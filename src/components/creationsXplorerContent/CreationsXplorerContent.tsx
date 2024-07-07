import React from 'react';
import CreationsXplorerItem from '../CreationsXplorerItem/CreationsXplorerItem';
import handleOpenModal from '../../utils/handleOpenModal';
import { ContextApp } from '../app/App';
import { nanoid } from 'nanoid';
import { IXplorer } from '../../interfaces/interface.creations';
import { IAppContext } from '../../interfaces/interface';
import styles from './CreationsXplorerContent.module.scss';

const CreationsXplorerContent = (props: IXplorer): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { projects, setXplorerState, xplorerState } = props;

    const handleProjectClick = (projectIndex: number): void => {
        setXplorerState('projectImages');
        contextApp.setProjectImages(projects[projectIndex].images);
        contextApp.setModalProject(projectIndex);
        contextApp.handleSoundClick();
    };

    const handleImageClick = (imageIndex: number): void => {
        handleOpenModal(contextApp.setCreations);
        contextApp.setModalProjectImage(imageIndex);
        contextApp.handleSoundModal();
    };

    return (
        <>
            <ul className={styles.content}>
                {projects.length === 0 ? <span className={styles.not_content}>No projects have been added</span> : null}
                {xplorerState === 'projects'
                    ? projects.map((project, index) => (
                          <CreationsXplorerItem
                              image="folder"
                              key={nanoid()}
                              onClick={() => handleProjectClick(index)}
                              textContent={project.name}
                          />
                      ))
                    : projects[contextApp.modalProject].images.map((imageName, index) => (
                          <CreationsXplorerItem
                              image="image"
                              key={nanoid()}
                              onClick={() => handleImageClick(index)}
                              textContent={imageName}
                          />
                      ))}
            </ul>
        </>
    );
};

export default CreationsXplorerContent;
