import React from 'react';
import { ContextApp } from '../app/App';
import Button from '../button/Button';
import handleOpenModal from '../../utils/handleOpenModal';
import AchievementsProgressRing from '../achievementsProgressRing/AchievementsProgressRing';
import { IAppContext } from '../../interfaces/interface';
import styles from './AchievementsProgress.module.scss';

const AchievementsProgress = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { achievements, handleSoundModal, setChallenge } = contextApp;

    const achievedCount = (): number => {
        return achievements.reduce((acc, achieve) => {
            if (achieve.status === 'achieved') {
                return acc + 1;
            }
            return acc;
        }, 0);
    };

    const allAchievements: number = achievements.length;
    const achievementsAchieved: number = achievedCount();
    const percent: number = (achievementsAchieved * 100) / allAchievements;

    return (
        <div className={styles.progress}>
            <div className={styles.progress__inner}>
                <AchievementsProgressRing percent={percent} />

                <span className={styles.progress__statistic}>
                    {achievementsAchieved}/{allAchievements}
                </span>
                <span className={styles.progress__name}>progress</span>
            </div>

            <p className={styles.progress__text}>
                I have created a set of achievements for myself and I use this page to track them.
            </p>
            <p className={styles.progress__text}>
                If you want to give me a challenge and rate it, please feel free to submit it with the button below!
            </p>

            <Button
                className={styles.progress__button}
                delayEvent={false}
                handleButton={() => {
                    handleOpenModal(setChallenge);
                    handleSoundModal();
                }}
                textContent="Challenge me"
                type="button"
            />
        </div>
    );
};

export default AchievementsProgress;
