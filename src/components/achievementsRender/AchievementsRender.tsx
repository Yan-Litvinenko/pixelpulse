import React from 'react';
import AchievementsAchieve from '../achievementsAchieve/AchievementsAchieve';
import handleSortAchievements from '../../utils/handleSortAchievements';
import achievements from '../../assets/json/achievements.json';
import { nanoid } from 'nanoid';
import styles from './AchievementsRender.module.scss';
import {
    Rarity,
    IAchieve,
    SwitchAchieved,
    AchievedPrefix,
    AchievedStatus,
} from '../../interfaces/interface.achievements';

interface IAchievementsRender {
    prefix: AchievedPrefix;
    switchStatus: SwitchAchieved;
    achieveStatus: AchievedStatus;
}

const AchievementsRender = ({ prefix, switchStatus, achieveStatus }: IAchievementsRender): React.JSX.Element => {
    const filtered: IAchieve[] = handleSortAchievements(achievements, switchStatus).filter(
        (achieve) => achieve.status === achieveStatus,
    );

    return filtered.length !== 0 ? (
        <div className={styles[prefix]}>
            <span className={styles[`${prefix}__title`]}>
                {prefix === 'achieved' ? 'achieved:' : 'to be achieved:'}
            </span>
            <div className={styles[`${prefix}__achievements`]}>
                {filtered.map((achieve) => (
                    <AchievementsAchieve
                        date={achieve.date}
                        description={achieve.description}
                        key={nanoid()}
                        rarity={achieve.rarity as Rarity}
                        status={achieve.status as AchievedStatus}
                        title={achieve.title}
                    />
                ))}
            </div>
        </div>
    ) : (
        <></>
    );
};

export default AchievementsRender;
