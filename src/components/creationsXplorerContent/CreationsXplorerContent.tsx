import React from 'react';
import projects from '../../assets/json/projects.json';
import styles from './CreationsXplorerContent.module.scss';
import { Image, Folder } from '../svgIcon/SvgIcon';
import { modalOpenHandler } from '../../store/modalSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useAppContext } from '../../hooks/useAppContext';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import type { AppDispatch } from '../../store/store';

const CreationsXplorerContent = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();

    const { setProjectImages, handleSoundClick, targetProject, setTargetImage, setTargetProject } = useAppContext();
    const { projectName } = useParams();

    const projectClick = (projectIndex: number): void => {
        setProjectImages(projects[projectIndex].images);
        setTargetProject(projectIndex);
        handleSoundClick();
    };

    const imageClick = (imageIndex: number): void => {
        dispatch(modalOpenHandler({ key: 'creations' }));
        setTargetImage(imageIndex);
    };

    return (
        <>
            <ul className={styles.content}>
                {projects.length === 0 ? <span className={styles.not_content}>No projects have been added</span> : null}
                {!projectName
                    ? projects.map((project, index) => (
                          <li key={nanoid()} onClick={() => projectClick(index)}>
                              <Link
                                  className={`${styles.item} ${styles.item_link}`}
                                  to={project.name}
                                  state={{ notTransition: true }}
                              >
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
