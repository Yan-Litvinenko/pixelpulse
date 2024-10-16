'use client';

import React from 'react';
import isOriginPath from '@/helpers/creations/getOriginPath';
import { creationsSelector } from '@/redux/selectors';
import { Hexagon } from '../svgIcon/SvgIcon';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function CreationsDetails(): React.JSX.Element {
    const { targetProject, defaultProject, projects } = useSelector(creationsSelector);
    const projectName = usePathname();

    return (
        <section className={'creations_details'}>
            <h3 className={'creations_details__title'}>
                details
                <Hexagon />
            </h3>
            <h4 className={'creations_details__subtitle'}>project name</h4>
            <span className={'creations_details__text'}>
                {isOriginPath(projectName) ? defaultProject.name : projects[targetProject].name}
            </span>

            <div className={'creations_decorative_line'}></div>

            <h4 className={'creations_details__subtitle'}>brief</h4>
            <p className={'creations_details__text'}>
                {isOriginPath(projectName) ? defaultProject.brief : projects[targetProject].brief}
            </p>
        </section>
    );
}
