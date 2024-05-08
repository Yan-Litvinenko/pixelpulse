import React from 'react';
import { Hexagon } from '../svgIcon/SvgIcon';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import { ICreationsBlock } from '../../interfaces/interface.credits';
import styles from './CreationsDetails.module.scss';

const CreationsDetails = ({
    projects,
    projectCount,
    projectDefault,
    xplorerState,
}: ICreationsBlock): React.JSX.Element => {
    const getHexagon = (): React.JSX.Element => <Hexagon />;

    return (
        <div className={styles.details}>
            <Heading className={styles.details__title} level="3" textContent="details" image={getHexagon} />
            <Heading className={styles.details__subtitle} level="4" textContent="project name" />
            <span className={styles.details__text}>
                {xplorerState === 'projects' ? projectDefault.name : projects[projectCount].name}
            </span>

            <div className={styles.decorative_line}></div>

            <Heading className={styles.details__subtitle} level="4" textContent="brief" />
            <Paragraph
                className={styles.details__text}
                textContent={xplorerState === 'projects' ? projectDefault.brief : projects[projectCount].brief}
            />
        </div>
    );
};

export default CreationsDetails;
