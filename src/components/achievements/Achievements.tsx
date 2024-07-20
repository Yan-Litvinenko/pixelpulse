import React from 'react';
import AchievementsToggle from '../achievementsToggle/AchievementsToggle';
import AchievementsProgress from '../achievementsProgress/AchievementsProgress';
import AchievementsBlock from '../achievementsBlock/AchievementsBlock';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import { ToggleStatus } from '../../interfaces/interface.achievements';
import styles from './Achievements.module.scss';

const Achievements = (): React.JSX.Element => {
    const contextApp: IContextApp | null = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { handleSoundClick } = contextApp;

    const [achievementFilter, setAchievementFilter] = React.useState<ToggleStatus>('all');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setAchievementFilter(event.target.value as ToggleStatus);
        handleSoundClick();
    };

    return (
        <main className={styles.achievements}>
            <h2 className={styles.achievements__title}>achievements</h2>

            <div className={styles.achievements__content}>
                <AchievementsProgress />

                <div className={styles.achievements__achievements}>
                    <AchievementsBlock
                        forWhatAchievements={'achieved'}
                        prefixForClassName={'achieved'}
                        toggleStatus={achievementFilter}
                    />
                    <AchievementsBlock
                        forWhatAchievements={'in progress'}
                        prefixForClassName={'ongoing'}
                        toggleStatus={achievementFilter}
                    />
                </div>

                <div className={styles.switchers}>
                    <AchievementsToggle
                        checked={achievementFilter === 'all'}
                        id="all"
                        onChange={handleChange}
                        textContent="all"
                        value={'all'}
                    />
                    <AchievementsToggle
                        checked={achievementFilter === 'achieved'}
                        id="achieved"
                        onChange={handleChange}
                        textContent="achieved"
                        value={'achieved'}
                    />
                    <AchievementsToggle
                        checked={achievementFilter === 'inProgress'}
                        id="inProgress"
                        onChange={handleChange}
                        textContent="in progress"
                        value={'inProgress'}
                    />
                </div>
            </div>
        </main>
    );
};

export default Achievements;
