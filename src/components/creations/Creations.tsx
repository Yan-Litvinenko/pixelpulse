import React from 'react';
import styles from './Creations.module.scss';
import { CreationsAbout } from '../creationsAbout/CreationsAbout';
import { CreationsDetails } from '../creationsDetails/CreationsDetails';
import { CreationsTechnologies } from '../creationsTechnologies/CreationsTechnologies';
import { CreationsXplorer } from '../creationsXplorer/CreationsXplorer';
import { Link } from 'react-router-dom';
import { soundsClickTrigger } from '../../store/slices/soundsSlice';
import { useDispatch } from 'react-redux';
import { useTargetProject } from '../../hooks/useTargetProject';
import type { AppDispatch } from '../../store/store';

const Creations = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    useTargetProject();

    return (
        <section className={styles.creations}>
            <h2 className={styles.creations__title}>creations</h2>

            <div className={styles.creations__inner}>
                <div className={styles.creations__details_block}>
                    <CreationsDetails />
                    <CreationsTechnologies />
                    <CreationsAbout />
                </div>

                <div className={styles.xplorer_block}>
                    <CreationsXplorer />

                    <div className={styles.box_button}>
                        <Link
                            to={'/creations'}
                            className={styles.box_button__back}
                            onClick={() => dispatch(soundsClickTrigger())}
                            type="button"
                            state={{ notTransition: true }}
                        >
                            Back to all projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Creations };
