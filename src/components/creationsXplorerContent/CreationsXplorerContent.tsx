import React from 'react';
import { Image, Folder } from '../svgIcon/SvgIcon';
import { nanoid } from 'nanoid';
import { useAppContext } from '../../hooks/useAppContext';
import { useParams, Link } from 'react-router-dom';
import projects from '../../assets/json/projects.json';
import styles from './CreationsXplorerContent.module.scss';

const CreationsXplorerContent = (): React.JSX.Element => {
    const { setProjectImages, handleSoundClick, creations, targetProject, setTargetImage, setTargetProject } =
        useAppContext();
    const { projectName } = useParams();

    const projectClick = (projectIndex: number): void => {
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
                {!projectName
                    ? projects.map((project, index) => (
                          <li key={nanoid()} onClick={() => projectClick(index)}>
                              <Link className={`${styles.item} ${styles.item_link}`} to={project.name}>
                                  <div className={styles.frame}>
                                      <Folder />
                                  </div>
                                  {project.name}
                              </Link>
                          </li>
                      ))
                    : projects[targetProject].images.map((imageName, index) => (
                          <li key={nanoid()} className={styles.item} onClick={() => imageClick(index)}>
                              <div className={styles.frame}>
                                  <Image />
                              </div>
                              {imageName.slice(5)}
                          </li>
                      ))}
            </ul>
        </>
    );
};

export { CreationsXplorerContent };
