import React from 'react';
import projects from '../../assets/json/projects.json';
import styles from './CreationsXplorerContent.module.scss';
import { soundsClickTrigger } from '../../store/soundsSlice';
import { Image, Folder } from '../svgIcon/SvgIcon';
import { modalOpenHandler } from '../../store/modalSlice';
import { nanoid } from '@reduxjs/toolkit';
import { setProjectImages, setTargetProject, setTargetImage } from '../../store/creationsSlice';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';

const CreationsXplorerContent = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const { targetProject } = useSelector((state: RootState) => state.creations);
    const { projectName } = useParams();

    const projectClick = (projectIndex: number): void => {
        dispatch(setProjectImages(projects[projectIndex].images));
        dispatch(setTargetProject(projectIndex));
        dispatch(soundsClickTrigger());
    };

    const imageClick = (imageIndex: number): void => {
        dispatch(modalOpenHandler({ key: 'creations' }));
        dispatch(setTargetImage(imageIndex));
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
