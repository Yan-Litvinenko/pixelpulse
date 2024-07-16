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

    const { setProjectImages, setModalProject, handleSoundClick, setModalProjectImage, handleSoundModal } = contextApp;
    const { modalProject } = contextApp;
    const { projects, setXplorerState, xplorerState } = props;

    const projectClick = (projectIndex: number): void => {
        setXplorerState('projectImages');
        setProjectImages(projects[projectIndex].images);
        setModalProject(projectIndex);
        handleSoundClick();
    };

    const imageClick = (imageIndex: number): void => {
        handleOpenModal(contextApp.setCreations);
        setModalProjectImage(imageIndex);
        handleSoundModal();
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
                              onClick={() => projectClick(index)}
                              textContent={project.name}
                          />
                      ))
                    : projects[modalProject].images.map((imageName, index) => (
                          <CreationsXplorerItem
                              image="image"
                              key={nanoid()}
                              onClick={() => imageClick(index)}
                              textContent={imageName}
                          />
                      ))}
            </ul>
        </>
    );
};

export default CreationsXplorerContent;
