import React from 'react';
import Heading from '../heading/Heading';
import { nanoid } from 'nanoid';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import { Figma, GitHub, Gulp, Hexagon, HexagonBorder, Html, JS } from '../svgIcon/SvgIcon';
import { MySql, NodeJS, ReactIcon, Sass, Ts, Webpack, Wordpress } from '../svgIcon/SvgIcon';
import { ICreationsBlock } from '../../interfaces/interface.credits';
import styles from './CreationsTechnologies.module.scss';

type Technologies = {
    [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

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

const CreationsTechnologies = ({ projects, projectDefault, xplorerState }: ICreationsBlock): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const getHexagon = (): React.JSX.Element => <Hexagon />;

    const renderAboutTechnologies = (technologiesName: string[], className: string): React.JSX.Element[] => {
        return technologiesName.map((item) => {
            const IconComponent = technologies[item];
            return (
                <div className={className} key={nanoid()}>
                    <HexagonBorder />
                    <IconComponent />
                </div>
            );
        });
    };

    return (
        <div className={styles.technologies}>
            <Heading className={styles.technologies__title} level="3" textContent="technologies" image={getHexagon} />
            <div className={styles.technologies__content}>
                {xplorerState === 'projects'
                    ? renderAboutTechnologies(projectDefault.technologies, styles.technologies__item)
                    : renderAboutTechnologies(
                          projects[contextApp.modalProject].technologies,
                          styles.technologies__item,
                      )}
            </div>
        </div>
    );
};

export default CreationsTechnologies;
