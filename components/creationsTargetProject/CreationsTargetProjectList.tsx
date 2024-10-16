'use client';

import React from 'react';
import useModal from '@/hooks/useModal';
import isOriginPath from '@/helpers/creations/getOriginPath';
import { creationsSelector } from '@/redux/selectors';
import { ImageIcon } from '@/components/svgIcon/SvgIcon';
import { nanoid } from '@reduxjs/toolkit';
import { setTargetImage } from '@/redux/slice/creationsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { setProjectImages, setTargetProject } from '@/redux/slice/creationsSlice';
import type { AppDispatch } from '@/redux/store';

export default function CreationsTargetProjectList(): React.JSX.Element {
    const dispatch: AppDispatch = useDispatch();
    const { targetProject, projects } = useSelector(creationsSelector);
    const modal = useModal('creations');
    const path: string = usePathname();
    const router = useRouter();

    const imageClick = (imageIndex: number): void => {
        dispatch(setTargetImage(imageIndex));
        modal.open();
    };

    React.useEffect(() => {
        if (!isOriginPath(path)) {
            const projectIndex: number = projects.findIndex((project) => path.split('/')[2] === project.name);

            if (projectIndex !== -1) {
                dispatch(setProjectImages(projects[projectIndex].images));
                dispatch(setTargetProject(projectIndex));
            } else {
                router.push('/error');
            }
        }
    }, []);

    return (
        <ul className={'creations_project_list'}>
            {projects[targetProject].images.map((image, index) => (
                <li key={nanoid()} className={'creations_project_list__item'} onClick={() => imageClick(index)}>
                    <div className={'creations_project_list__frame'}>
                        <ImageIcon />
                    </div>
                    {image.name.slice(5)}
                </li>
            ))}
        </ul>
    );
}
