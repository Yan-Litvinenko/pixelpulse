'use client';

import React from 'react';
import isOriginPath from '@/helpers/creations/getOriginPath';
import styles from '@/styles/components/creationsAbout/CreatinsAbout.module.scss';
import { creationsSelector } from '@/redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function CreationsAbout(): React.JSX.Element {
    const { targetProject, defaultProject, projects } = useSelector(creationsSelector);
    const projectName = usePathname();
    const texts: string[] = isOriginPath(projectName) ? defaultProject.about : projects[targetProject].about || [];

    return (
        <section className={styles.about}>
            <h3 className={styles.about__title}>About:</h3>

            <div className={styles.about__text_box}>
                {texts.map((text) => (
                    <p key={nanoid()} className={styles.about__text}>
                        {text}
                    </p>
                ))}
            </div>
        </section>
    );
}
