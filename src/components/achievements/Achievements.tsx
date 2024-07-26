import React from 'react';
import { AchievementsBlock } from '../achievementsBlock/AchievementsBlock';
import { AchievementsError } from '../achievementsError/AchievementsError';
import { achievementsFilter, achievementsSort } from '../../hooks/useAchievements';
import { AchievementsProgress } from '../achievementsProgress/AchievementsProgress';
import { AchievementsToggle } from '../achievementsToggle/AchievementsToggle';
import { ToggleStatus } from '../../interfaces/interface.achievements';
import { Triangle } from 'react-loader-spinner';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './Achievements.module.scss';

const Achievements = (): React.JSX.Element => {
    const { handleSoundClick, achievements } = useAppContext();
    const { isError, isLoad } = achievements;
    const [filterStatus, setFilterStatus] = React.useState<ToggleStatus>('all');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFilterStatus(event.target.value as ToggleStatus);
        handleSoundClick();
    };

    return (
        <main className={styles.achievements}>
            <h1 className={styles.achievements__title}>achievements</h1>

            <div className={styles.achievements__content}>
                <AchievementsProgress />

                <div className={styles.achievements__achievements}>
                    {isLoad ? (
                        <Triangle
                            ariaLabel="triangle-loading"
                            color=""
                            height="120"
                            visible={true}
                            width="120"
                            wrapperClass={styles.loader}
                            wrapperStyle={{}}
                        />
                    ) : isError ? (
                        <AchievementsError />
                    ) : (
                        <>
                            <AchievementsBlock
                                prefixForClassName={'achieved'}
                                achievements={achievementsSort(
                                    achievementsFilter(achievements.achievements || [], filterStatus, 'achieved'),
                                )}
                            />
                            <AchievementsBlock
                                prefixForClassName={'ongoing'}
                                achievements={achievementsSort(
                                    achievementsFilter(achievements.achievements || [], filterStatus, 'in progress'),
                                )}
                            />
                        </>
                    )}
                </div>

                <div className={styles.switchers}>
                    <AchievementsToggle
                        checked={filterStatus === 'all'}
                        id="all"
                        onChange={handleChange}
                        textContent="all"
                        value={'all'}
                    />
                    <AchievementsToggle
                        checked={filterStatus === 'achieved'}
                        id="achieved"
                        onChange={handleChange}
                        textContent="achieved"
                        value={'achieved'}
                    />
                    <AchievementsToggle
                        checked={filterStatus === 'inProgress'}
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

export { Achievements };
