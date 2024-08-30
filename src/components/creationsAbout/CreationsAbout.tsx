import React from 'react';
import styles from './CreationsAbout.module.scss';
import { creationsSelector } from '../../store/selectors/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';

const CreationsAbout = (): React.JSX.Element => {
    const { targetProject, defaultProject, projects } = creationsSelector;
    const { projectName } = useParams();

    const texts: string[] = !projectName ? defaultProject.about : projects[targetProject].about || [];

    return (
        <section className={styles.about}>
            <h3 className={styles.about__title}>About:</h3>

            <div className={styles.about__text_box}>
                {texts.map((text) => (
                    <p key={nanoid()} className={styles.about__text}>
                        {text}
                    </p>
                ))}
            </div>
        </section>
    );
};

export { CreationsAbout };
