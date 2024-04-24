import React from 'react';
import Button from '../button/Button';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import ProgressRing from '../progressRing/ProgressRing';
import styles from './Achievements.module.scss';

const Achievements = (): React.JSX.Element => {
    return (
        <main className={styles.achievements}>
            <Frame />
            <Heading className={styles.achievements__title} level="2" textContent="achievements" />
            <div className={styles.progress}>
                <div className={styles.progress__inner}>
                    <ProgressRing />
                    <span className={styles.progress__statistic}>13/22</span>
                    <span className={styles.progress__name}>progress</span>
                </div>
                <Paragraph
                    className={styles.progress__text}
                    textContent="I have created a set of achievements for myself and I use this page to track them."
                />
                <Paragraph
                    className={styles.progress__text}
                    textContent="If you want to give me a challenge and rate it, please feel free to submit it with the button below!"
                />
                <Button className={styles.progress__button} textContent="Challenge me" onClick={() => {}} />
            </div>
        </main>
    );
};

export default Achievements;
