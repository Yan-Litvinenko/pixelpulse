import React from 'react';
import AchievementsAchieve from '../achievementsAchieve/AchievementsAchieve';
import AchievementsProgress from '../achievementsProgress/AchievementsProgress';
import AchievementsLabel from '../achievementsLabel/AchievementsLabel';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import { nanoid } from 'nanoid';
import { Rarity } from '../../interfaces/interface';
import achievements from '../../assets/json/achievements.json';
import styles from './Achievements.module.scss';

const Achievements = (): React.JSX.Element => {
    return (
        <main className={styles.achievements}>
            <Frame />
            <Heading className={styles.achievements__title} level="2" textContent="achievements" />
            <div className={styles.achievements__content}>
                <AchievementsProgress />

                <div className={styles.achievements__achievements}>
                    {achieved() ? (
                        <div className={styles.achieved}>
                            <span className={styles.achieved__title}>achieved:</span>
                            <div className={styles.achieved__achievements}>
                                {achievements.map((achieve) => {
                                    if (achieve.status === 'achieved') {
                                        return (
                                            <AchievementsAchieve
                                                key={nanoid()}
                                                date={achieve.date}
                                                description={achieve.description}
                                                rarity={achieve.rarity as Rarity}
                                                status={achieve.status}
                                                title={achieve.title}
                                            />
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    ) : null}

                    {ongoing() ? (
                        <div className={styles.ongoing}>
                            <span className={styles.ongoing__title}>to be achieved:</span>
                            <div className={styles.ongoing__achievements}>
                                {achievements.map((achieve) => {
                                    if (achieve.status === 'in progress') {
                                        return (
                                            <AchievementsAchieve
                                                date={achieve.date}
                                                description={achieve.description}
                                                rarity={achieve.rarity as Rarity}
                                                status={achieve.status}
                                                title={achieve.title}
                                            />
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    ) : null}
                </div>

                <div className={styles.switchers}>
                    <AchievementsLabel id="achieved" textContent="achieved" />
                    <AchievementsLabel id="inProgress" textContent="in progress" />
                    <AchievementsLabel id="all" textContent="all" />
                </div>
            </div>
        </main>
    );
};

function achieved(): boolean {
    const hasAchieved = achievements.find((achieve) => achieve.status === 'achieved');
    return !!hasAchieved;
}

function ongoing() {
    const hasOngoing = achievements.find((achieve) => achieve.status === 'in progress');
    return !!hasOngoing;
}

export default Achievements;
