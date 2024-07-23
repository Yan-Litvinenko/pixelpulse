import React, { Suspense } from 'react';
import { AchievementsProgressRing } from '../achievementsProgressRing/AchievementsProgressRing';
import { Await, useLoaderData } from 'react-router-dom';
import { IAchieve } from '../../interfaces/interface.achievements';
import { useAppContext } from '../../hooks/useAppContext';
import handleOpenModal from '../../utils/handleOpenModal';
import styles from './AchievementsProgress.module.scss';

const AchievementsProgress = (): React.JSX.Element => {
    const { handleSoundModal, setChallenge } = useAppContext();
    const { achievements } = useLoaderData() as { achievements: IAchieve[] };

    const achievedCount = (allAchievements: IAchieve[]): number =>
        allAchievements.reduce((acc, { status }) => acc + (status === 'achieved' ? 1 : 0), 0);

    return (
        <div className={styles.progress}>
            <div className={styles.progress__inner}>
                <Suspense
                    fallback={
                        <>
                            <AchievementsProgressRing percent={100} />
                            <span className={styles.progress__statistic}>0/0</span>
                        </>
                    }
                >
                    <Await resolve={achievements}>
                        {(resolveAchievements) => {
                            if (resolveAchievements.status === '404') {
                                return (
                                    <>
                                        <AchievementsProgressRing percent={100} />
                                        <span className={styles.progress__statistic}>0/0</span>
                                    </>
                                );
                            }
                            const allAchievements: number = resolveAchievements.length;
                            const achievementsAchieved: number = achievedCount(resolveAchievements);
                            const percent: number = (achievementsAchieved * 100) / allAchievements;

                            return (
                                <>
                                    <AchievementsProgressRing percent={percent} />
                                    <span className={styles.progress__statistic}>
                                        {achievementsAchieved}/{allAchievements}
                                    </span>
                                </>
                            );
                        }}
                    </Await>
                </Suspense>

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
                onClick={() => {
                    handleOpenModal(setChallenge);
                    handleSoundModal();
                }}
                type="button"
            >
                Challenge me
            </button>
        </div>
    );
};

export { AchievementsProgress };
