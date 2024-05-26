import React from 'react';
import Heading from '../heading/Heading';
import { nanoid } from 'nanoid';
import { Hexagon, HexagonBorder, ReactIcon, NodeJS, Figma, JS, GitHub, Wordpress, Html } from '../svgIcon/SvgIcon';
import { ICreationsBlock } from '../../interfaces/interface.credits';
import styles from './CreationsTechnologies.module.scss';

type Technologies = {
    [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const technologies: Technologies = {
    figma: Figma,
    github: GitHub,
    js: JS,
    nodeJS: NodeJS,
    react: ReactIcon,
    wordpress: Wordpress,
    html: Html,
};

const CreationsTechnologies = ({
    projects,
    projectCount,
    projectDefault,
    xplorerState,
}: ICreationsBlock): React.JSX.Element => {
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
                    : renderAboutTechnologies(projects[projectCount].technologies, styles.technologies__item)}
            </div>
        </div>
    );
};

export default CreationsTechnologies;
