import React from 'react';
import { CreationsTechnologiesContent } from '../creationsTechnologiesContent/CreationsTechnologiesContent';
import { Hexagon } from '../svgIcon/SvgIcon';
import { useAppContext } from '../../hooks/useAppContext';
import { ICreationsBlock } from '../../interfaces/interface.creations';
import styles from './CreationsTechnologies.module.scss';

const CreationsTechnologies = (props: ICreationsBlock): React.JSX.Element => {
    const { targetProject } = useAppContext();
    const { projectDefault, projects, xplorerLocation } = props;

    return (
        <div className={styles.technologies}>
            <h3 className={styles.technologies__title}>
                technologies
                <Hexagon />
            </h3>
            <div>
                <CreationsTechnologiesContent
                    names={
                        xplorerLocation === 'projects'
                            ? projectDefault.technologies
                            : projects[targetProject].technologies
                    }
                />
            </div>
        </div>
    );
};

export { CreationsTechnologies };
