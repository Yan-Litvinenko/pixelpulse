import React from 'react';
import { Hexagon } from '../svgIcon/SvgIcon';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import { ICreationsBlock } from '../../interfaces/interface.creations';
import styles from './CreationsDetails.module.scss';

const CreationsDetails = (props: ICreationsBlock): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { projectDefaultData, projects, xplorerState } = props;

    return (
        <div className={styles.details}>
            <h3 className={styles.details__title}>
                details
                <Hexagon />
            </h3>
            <h4 className={styles.details__subtitle}>project name</h4>
            <span className={styles.details__text}>
                {xplorerState === 'projects' ? projectDefaultData.name : projects[contextApp.modalProject].name}
            </span>

            <div className={styles.decorative_line}></div>

            <h4 className={styles.details__subtitle}>brief</h4>
            <p className={styles.details__text}>
                {xplorerState === 'projects' ? projectDefaultData.brief : projects[contextApp.modalProject].brief}
            </p>
        </div>
    );
};

export default CreationsDetails;
