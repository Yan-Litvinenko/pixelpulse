import React from 'react';
import CreationsTechnologiesContent from '../creationsTechnologiesContent/CreationsTechnologiesContent';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import { Hexagon } from '../svgIcon/SvgIcon';
import { ICreationsBlock } from '../../interfaces/interface.creations';
import styles from './CreationsTechnologies.module.scss';

const CreationsTechnologies = (props: ICreationsBlock): React.JSX.Element => {
    const contextLayContextApp: IContextApp | null = React.useContext(ContextApp);

    if (!contextLayContextApp) return <></>;

    const { modalProject } = contextLayContextApp;
    const { projectDefaultData, projects, xplorerState } = props;

    return (
        <div className={styles.technologies}>
            <h3 className={styles.technologies__title}>
                technologies
                <Hexagon />
            </h3>
            <div>
                <CreationsTechnologiesContent
                    names={
                        xplorerState === 'projects'
                            ? projectDefaultData.technologies
                            : projects[modalProject].technologies
                    }
                />
            </div>
        </div>
    );
};

export default CreationsTechnologies;
