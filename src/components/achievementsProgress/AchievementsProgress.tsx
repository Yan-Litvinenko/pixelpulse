import React from 'react';
import { AchievementsProgressRing } from '../achievementsProgressRing/AchievementsProgressRing';
import { useAppContext } from '../../hooks/useAppContext';
import { useModal } from '../../hooks/useModal';
import styles from './AchievementsProgress.module.scss';

const AchievementsProgress = (): React.JSX.Element => {
    const { achievements } = useAppContext();
    const { isLoad, isError, amountAchieved, amountAchievements, percent } = achievements;
    const { openModal } = useModal('challenge');

    return (
        <div className={styles.progress}>
            <div className={styles.progress__inner}>
                {isLoad || isError ? (
                    <>
                        <AchievementsProgressRing percent={100} />
                        <span className={styles.progress__statistic}>0/0</span>
                    </>
                ) : (
                    <>
                        <AchievementsProgressRing percent={Number(percent)} />
                        <span className={styles.progress__statistic}>
                            {Number(amountAchieved)}/{Number(amountAchievements)}
                        </span>
                    </>
                )}

                <span className={styles.progress__name}>progress</span>
            </div>

            <p className={styles.progress__text}>
                I have created a set of achievements for myself and I use this page to track them.
            </p>
            <p className={styles.progress__text}>
                If you want to give me a challenge and rate it, please feel free to submit it with the button below!
            </p>

            <button className={styles.progress__button} onClick={openModal} type="button">
                Challenge me
            </button>
        </div>
    );
};

export { AchievementsProgress };
