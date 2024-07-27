import React from 'react';
import { CreationsXplorerItem } from '../CreationsXplorerItem/CreationsXplorerItem';
import { ICreationsXplorer } from '../../interfaces/interface.creations';
import { nanoid } from 'nanoid';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './CreationsXplorerContent.module.scss';

const CreationsXplorerContent = (props: ICreationsXplorer): React.JSX.Element => {
    const { setProjectImages, handleSoundClick, creations, targetProject, setTargetImage, setTargetProject } =
        useAppContext();
    const { projects, xplorerLocation, setXplorerLocation } = props;

    const projectClick = (projectIndex: number): void => {
        setXplorerLocation('projectImages');
        setProjectImages(projects[projectIndex].images);
        setTargetProject(projectIndex);
        handleSoundClick();
    };

    const imageClick = (imageIndex: number): void => {
        creations.openModal();
        setTargetImage(imageIndex);
    };

    return (
        <>
            <ul className={styles.content}>
                {projects.length === 0 ? <span className={styles.not_content}>No projects have been added</span> : null}
                {xplorerLocation === 'projects'
                    ? projects.map((project, index) => (
                          <CreationsXplorerItem
                              image="folder"
                              key={nanoid()}
                              onClick={() => projectClick(index)}
                              textContent={project.name}
                          />
                      ))
                    : projects[targetProject].images.map((imageName, index) => (
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

export { CreationsXplorerContent };
