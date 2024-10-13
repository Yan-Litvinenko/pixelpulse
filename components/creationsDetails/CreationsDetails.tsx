'use client';

import React from 'react';
import isOriginPath from '@/helpers/creations/getOriginPath';
import styles from '@/styles/components/creationsDetails/CreationsDetails.module.scss';
import { creationsSelector } from '@/redux/selectors';
import { Hexagon } from '../svgIcon/SvgIcon';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function CreationsDetails(): React.JSX.Element {
    const { targetProject, defaultProject, projects } = useSelector(creationsSelector);
    const projectName = usePathname();

    return (
        <section className={styles.details}>
            <h3 className={styles.details__title}>
                details
                <Hexagon />
            </h3>
            <h4 className={styles.details__subtitle}>project name</h4>
            <span className={styles.details__text}>
                {isOriginPath(projectName) ? defaultProject.name : projects[targetProject].name}
            </span>

            <div className={styles.decorative_line}></div>

            <h4 className={styles.details__subtitle}>brief</h4>
            <p className={styles.details__text}>
                {isOriginPath(projectName) ? defaultProject.brief : projects[targetProject].brief}
            </p>
        </section>
    );
}
