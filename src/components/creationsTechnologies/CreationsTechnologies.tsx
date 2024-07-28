import React from 'react';
import { CreationsTechnologiesContent } from '../creationsTechnologiesContent/CreationsTechnologiesContent';
import { Hexagon } from '../svgIcon/SvgIcon';
import { ICreationsBlock } from '../../interfaces/interface.creations';
import { useAppContext } from '../../hooks/useAppContext';
import { useParams } from 'react-router-dom';
import styles from './CreationsTechnologies.module.scss';

const CreationsTechnologies = (props: ICreationsBlock): React.JSX.Element => {
    const { targetProject } = useAppContext();
    const { projectName } = useParams();
    const { projectDefault, projects } = props;

    return (
        <div className={styles.technologies}>
            <h3 className={styles.technologies__title}>
                technologies
                <Hexagon />
            </h3>
            <div>
                <CreationsTechnologiesContent
                    names={projectName ? projectDefault.technologies : projects[targetProject].technologies}
                />
            </div>
        </div>
    );
};

export { CreationsTechnologies };
