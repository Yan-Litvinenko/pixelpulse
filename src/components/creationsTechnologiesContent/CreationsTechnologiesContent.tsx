import React from 'react';
import styles from './CreationsTechnologiesContent.module.scss';
import { creationsSelector } from '../../store/selectors/selectors';
import { Figma, GitHub, Gulp, HexagonBorder, Html, JS, Redux } from '../svgIcon/SvgIcon';
import { MySql, NodeJS, ReactIcon, Sass, Ts, Webpack, Wordpress } from '../svgIcon/SvgIcon';
import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { Technologies } from '../../interfaces/interface.creations';

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
    sass: Sass,
    ts: Ts,
    webpack: Webpack,
    wordpress: Wordpress,
};

const CreationsTechnologiesContent = (): React.JSX.Element => {
    const { targetProject, defaultProject, projects } = useSelector(creationsSelector);
    const { projectName } = useParams();

    const technologiesNames: string[] = !projectName
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
};

export { CreationsTechnologiesContent };
