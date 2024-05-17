import React from 'react';
import { ContextApp } from '../app/App';
import Button from '../button/Button';
import Paragraph from '../paragraph/Paragraph';
import ProgressRing from '../progressRing/ProgressRing';
import handleOpenModal from '../../utils/handleOpenModal';
import achievements from '../../assets/json/achievements.json';
import { IAppContext } from '../../interfaces/interface';
import styles from './AchievementsProgress.module.scss';

const achievedCount = (): number => {
    return achievements.reduce((acc, achieve) => {
        if (achieve.status === 'achieved') {
            return acc + 1;
        }
        return acc;
    }, 0);
};

const AchievementsProgress = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const countAchievements: number = achievements.length;
    const countAchieved: number = achievedCount();
    const percent: number = (countAchieved * 100) / countAchievements;

    return (
        <div className={styles.progress}>
            <div className={styles.progress__inner}>
                <ProgressRing percent={percent} />
                <span className={styles.progress__statistic}>
                    {countAchieved}/{countAchievements}
                </span>
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
            <Button
                className={styles.progress__button}
                delayEvent={false}
                handleButton={() => {
                    handleOpenModal(contextApp?.setChallenge);
                    contextApp?.handleSoundOpenModal();
                }}
                textContent="Challenge me"
                type="button"
            />
        </div>
    );
};

export default AchievementsProgress;
