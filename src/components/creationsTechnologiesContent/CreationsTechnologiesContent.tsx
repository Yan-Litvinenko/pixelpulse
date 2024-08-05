import React from 'react';
import styles from './CreationsTechnologiesContent.module.scss';
import { nanoid } from '@reduxjs/toolkit';
import { Figma, GitHub, Gulp, HexagonBorder, Html, JS } from '../svgIcon/SvgIcon';
import { MySql, NodeJS, ReactIcon, Sass, Ts, Webpack, Wordpress } from '../svgIcon/SvgIcon';
import type { Technologies, ICreationsTechnologiesContent } from '../../interfaces/interface.creations';

const technologies: Technologies = {
    figma: Figma,
    github: GitHub,
    gulp: Gulp,
    html: Html,
    js: JS,
    mysql: MySql,
    nodeJS: NodeJS,
    react: ReactIcon,
    sass: Sass,
    ts: Ts,
    webpack: Webpack,
    wordpress: Wordpress,
};

const CreationsTechnologiesContent = (props: ICreationsTechnologiesContent): React.JSX.Element => {
    const { names } = props;
    return (
        <div className={styles.content}>
            {names.map((item) => {
                const IconComponent = technologies[item];

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
