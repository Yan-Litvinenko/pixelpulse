import React from 'react';
import { Hexagon } from '../svgIcon/SvgIcon';
import { ICreationsBlock } from '../../interfaces/interface.creations';
import { useAppContext } from '../../hooks/useAppContext';
import { useParams } from 'react-router-dom';
import styles from './CreationsDetails.module.scss';

const CreationsDetails = (props: ICreationsBlock): React.JSX.Element => {
    const { targetProject } = useAppContext();
    const { projectName } = useParams();
    const { projectDefault, projects } = props;

    return (
        <div className={styles.details}>
            <h3 className={styles.details__title}>
                details
                <Hexagon />
            </h3>
            <h4 className={styles.details__subtitle}>project name</h4>
            <span className={styles.details__text}>
                {projectName ? projectDefault.name : projects[targetProject].name}
            </span>

            <div className={styles.decorative_line}></div>

            <h4 className={styles.details__subtitle}>brief</h4>
            <p className={styles.details__text}>{projectName ? projectDefault.brief : projects[targetProject].brief}</p>
        </div>
    );
};

export { CreationsDetails };
