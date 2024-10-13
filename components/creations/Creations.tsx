'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/creationsProjectList/CreationsProjectList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Folder } from '@/components/svgIcon/SvgIcon';
import { creationsSelector } from '@/redux/selectors';
import { setProjectImages, setTargetProject } from '@/redux/slice/creationsSlice';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';

export default function CreationsClient(): React.JSX.Element {
    const dispatch = useDispatch();
    const { projects } = useSelector(creationsSelector);

    const projectClick = (projectIndex: number): void => {
        dispatch(setProjectImages(projects[projectIndex].images));
        dispatch(setTargetProject(projectIndex));
        dispatch(soundsClickTrigger());
    };

    return (
        <ul className={styles.content}>
            {projects.length === 0 ? <span className={styles.not_content}>No projects have been added</span> : null}
            {projects.map((project, index) => (
                <li key={project.name} onClick={() => projectClick(index)}>
                    <Link className={`${styles.item} ${styles.item_link}`} href={`/creations/${project.name}`}>
                        <span className={styles.frame}>
                            <Folder />
                        </span>
                        {project.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
