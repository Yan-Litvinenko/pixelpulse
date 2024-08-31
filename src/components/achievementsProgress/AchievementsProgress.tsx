import React from 'react';
import styles from './AchievementsProgress.module.scss';
import { AchievementsProgressRing } from '../achievementsProgressRing/AchievementsProgressRing';
import { achievementsSelector } from '../../store/selectors/selectors';
import { modalOpenHandler } from '../../store/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../store/store';

const AchievementsProgress = (): React.JSX.Element => {
    const { error, loading, amountAchieved, amountAchievements, percent } = useSelector(achievementsSelector);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <section className={styles.progress}>
            <div className={styles.progress__inner}>
                {loading || error ? (
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

            <button
                className={styles.progress__button}
                onClick={() => dispatch(modalOpenHandler({ key: 'challenge' }))}
                type="button"
            >
                Challenge me
            </button>
        </section>
    );
};

export { AchievementsProgress };
