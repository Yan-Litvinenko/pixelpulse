'use client';

import React from 'react';
import styles from '@/styles/components/creationsTechnologiesContent/CreationsTechnologiesContent.module.scss';
import { creationsSelector } from '@/redux/selectors';
import { Figma, GitHub, Gulp, HexagonBorder, Html, JS, NextJS, Redux } from '../svgIcon/SvgIcon';
import { MySql, NodeJS, ReactIcon, Sass, Ts, Webpack, Wordpress, Graphql } from '../svgIcon/SvgIcon';
import { nanoid } from '@reduxjs/toolkit';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import type { Technologies } from '@/interface/creations/creations.interface';

const technologies: Technologies = {
    figma: Figma,
    github: GitHub,
    gulp: Gulp,
    html: Html,
    js: JS,
    mysql: MySql,
    nodeJS: NodeJS,
    react: ReactIcon,
    redux: Redux,
    nextjs: NextJS,
    graphql: Graphql,
    sass: Sass,
    ts: Ts,
    webpack: Webpack,
    wordpress: Wordpress,
};

export default function CreationsTechnologiesContent(): React.JSX.Element {
    const { targetProject, defaultProject, projects } = useSelector(creationsSelector);
    const projectName = usePathname();

    const technologiesNames: string[] = !projectName.replace(/^\/creations$/gi, '')
        ? defaultProject.technologies
        : projects[targetProject].technologies;

    return (
        <div className={styles.content}>
            {technologiesNames.map((name) => {
                const IconComponent = technologies[name];

                return (
                    <div className={styles.content__item} key={nanoid()}>
                        <HexagonBorder />
                        <IconComponent />
                    </div>
                );
            })}
        </div>
    );
}
