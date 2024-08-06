import React from 'react';
import styles from './Achievements.module.scss';
import { AchievementsBlock } from '../achievementsBlock/AchievementsBlock';
import { AchievementsError } from '../achievementsError/AchievementsError';
import { achievementsFilter } from '../../utils/achievementsFilter';
import { AchievementsProgress } from '../achievementsProgress/AchievementsProgress';
import { achievementsSort } from '../../utils/achievementsSort';
import { AchievementsToggle } from '../achievementsToggle/AchievementsToggle';
import type { RootState } from '../../store/store';
import { Triangle } from 'react-loader-spinner';
import { useAppContext } from '../../hooks/useAppContext';
import { useSelector } from 'react-redux';
import type { ToggleStatus } from '../../interfaces/interface.achievements';

const Achievements = (): React.JSX.Element => {
    const { handleSoundClick } = useAppContext();
    const { achievements, loading, error } = useSelector((state: RootState) => state.achievements);
    const [filterStatus, setFilterStatus] = React.useState<ToggleStatus>('all');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFilterStatus(event.target.value as ToggleStatus);
        handleSoundClick();
    };

    return (
        <main className={styles.achievements}>
            <h1 className={styles.achievements__title}>{error ? 'Error achievements loading' : 'Achievements'}</h1>

            <div className={styles.achievements__content}>
                <AchievementsProgress />

                <div className={styles.achievements__achievements}>
                    {loading ? (
                        <Triangle
                            ariaLabel="triangle-loading"
                            color=""
                            height="120"
                            visible={true}
                            width="120"
                            wrapperClass={styles.loader}
                            wrapperStyle={{}}
                        />
                    ) : error ? (
                        <AchievementsError />
                    ) : (
                        <>
                            <AchievementsBlock
                                prefixForClassName={'achieved'}
                                achievements={achievementsSort(
                                    achievementsFilter(achievements || [], filterStatus, 'achieved'),
                                )}
                            />
                            <AchievementsBlock
                                prefixForClassName={'ongoing'}
                                achievements={achievementsSort(
                                    achievementsFilter(achievements || [], filterStatus, 'in progress'),
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
