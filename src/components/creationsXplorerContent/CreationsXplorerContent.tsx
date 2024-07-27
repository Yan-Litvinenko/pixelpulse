import React from 'react';
import { IXplorer } from '../../interfaces/interface.creations';
import { nanoid } from 'nanoid';
import { useAppContext } from '../../hooks/useAppContext';
import { CreationsXplorerItem } from '../CreationsXplorerItem/CreationsXplorerItem';
import styles from './CreationsXplorerContent.module.scss';

const CreationsXplorerContent = (props: IXplorer): React.JSX.Element => {
    const { setProjectImages, setModalProject, handleSoundClick, setModalProjectImage, modalProject, creations } =
        useAppContext();
    const { projects, setXplorerState, xplorerState } = props;

    const projectClick = (projectIndex: number): void => {
        setXplorerState('projectImages');
        setProjectImages(projects[projectIndex].images);
        setModalProject(projectIndex);
        handleSoundClick();
    };

    const imageClick = (imageIndex: number): void => {
        creations.openModal();
        setModalProjectImage(imageIndex);
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
