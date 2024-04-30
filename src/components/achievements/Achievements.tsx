import React from 'react';
import AchievementsAchieve from '../achievementsAchieve/AchievementsAchieve';
import AchievementsProgress from '../achievementsProgress/AchievementsProgress';
import AchievementsLabel from '../achievementsLabel/AchievementsLabel';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import { nanoid } from 'nanoid';
import { Rarity, SwitchAchieved } from '../../interfaces/interface';
import achievements from '../../assets/json/achievements.json';
import styles from './Achievements.module.scss';

interface IAchieve {
    date: string;
    description: string;
    rarity: string;
    status: string;
    title: string;
}

const Achievements = (): React.JSX.Element => {
    const [checked, setChecked] = React.useState<SwitchAchieved>('all');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setChecked(event.target.value as SwitchAchieved);
    };

    const filteredAchievements: IAchieve[] = achievements.filter((achieve) => {
        if (checked === 'all') return true;
        if (checked === 'achieved') return achieve.status === 'achieved';
        if (checked === 'inProgress') return achieve.status === 'in progress';
        return false;
    });

    const renderAchievements = (status: string): React.ReactElement | null => {
        const filtered: IAchieve[] = filteredAchievements.filter((achieve) => achieve.status === status);
        const classPrefix: 'achieved' | 'ongoing' = status === 'achieved' ? 'achieved' : 'ongoing';
        if (filtered.length === 0) return null;

        return (
            <div className={styles[classPrefix]}>
                <span className={styles[`${classPrefix}__title`]}>
                    {status === 'achieved' ? 'achieved:' : 'to be achieved:'}
                </span>
                <div className={styles[`${classPrefix}__achievements`]}>
                    {filtered.map((achieve) => (
                        <AchievementsAchieve
                            key={nanoid()}
                            date={achieve.date}
                            description={achieve.description}
                            rarity={achieve.rarity as Rarity}
                            status={achieve.status as 'achieved' | 'in progress'}
                            title={achieve.title}
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <main className={styles.achievements}>
            <Frame className={styles.frame} />
            <Heading className={styles.achievements__title} level="2" textContent="achievements" />
            <div className={styles.achievements__content}>
                <AchievementsProgress />
                <div className={styles.achievements__achievements}>
                    {renderAchievements('achieved')}
                    {renderAchievements('in progress')}
                </div>

                <div className={styles.switchers}>
                    <AchievementsLabel
                        id="achieved"
                        onChange={handleChange}
                        textContent="achieved"
                        value={'achieved'}
                        checked={checked === 'achieved'}
                    />
                    <AchievementsLabel
                        id="inProgress"
                        onChange={handleChange}
                        textContent="in progress"
                        value={'inProgress'}
                        checked={checked === 'inProgress'}
                    />
                    <AchievementsLabel
                        checked={checked === 'all'}
                        id="all"
                        onChange={handleChange}
                        textContent="all"
                        value={'all'}
                    />
                </div>
            </div>
        </main>
    );
};

export default Achievements;
