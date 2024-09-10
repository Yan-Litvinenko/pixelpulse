import React from 'react';
import styles from './CreationsDetails.module.scss';
import { creationsSelector } from '../../store/selectors';
import { Hexagon } from '../svgIcon/SvgIcon';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CreationsDetails = (): React.JSX.Element => {
    const { targetProject, defaultProject, projects } =
        useSelector(creationsSelector);
    const { projectName } = useParams();

    return (
        <section className={styles.details}>
            <h3 className={styles.details__title}>
                details
                <Hexagon />
            </h3>
            <h4 className={styles.details__subtitle}>project name</h4>
            <span className={styles.details__text}>
                {!projectName
                    ? defaultProject.name
                    : projects[targetProject].name}
            </span>

            <div className={styles.decorative_line}></div>

            <h4 className={styles.details__subtitle}>brief</h4>
            <p className={styles.details__text}>
                {!projectName
                    ? defaultProject.brief
                    : projects[targetProject].brief}
            </p>
        </section>
    );
};

export { CreationsDetails };
