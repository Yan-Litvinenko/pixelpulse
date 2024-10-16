'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
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
        <ul className={'creations_project_list'}>
            {projects.length === 0 ? (
                <span className={'creations_project_list_not_content'}>No projects have been added</span>
            ) : null}
            {projects.map((project, index) => (
                <li key={nanoid()} onClick={() => projectClick(index)}>
                    <Link
                        className={'creations_project_list__item styles.creations_project_list__link'}
                        href={`/creations/${project.name}`}
                    >
                        <span className={'creations_project_list__frame'}>
                            <Folder />
                        </span>
                        {project.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
