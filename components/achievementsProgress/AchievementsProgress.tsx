import React from 'react';
import AchievementsChallengeBtn from '../achievementsChallengeBtn/AchievementsChallengeBtn';
import AchievementsProgressRing from '../achievementsProgressRing/AchievementsProgressRing';
import styles from '@/styles/components/achievementsProgress/AchievementsProgress.module.scss';
import { achievementsSelector } from '@/redux/selectors';
import { useSelector } from 'react-redux';

export default function AchievementsProgress(): React.JSX.Element {
    const { error, loading, amountAchieved, amountAchievements, percent } = useSelector(achievementsSelector);

    return (
        <aside className={styles.progress}>
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

            <AchievementsChallengeBtn />
        </aside>
    );
}
