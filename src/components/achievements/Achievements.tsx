import React from 'react';
import styles from './Achievements.module.scss';
import { AchievementsBlock } from '../achievementsBlock/AchievementsBlock';
import { AchievementsError } from '../achievementsError/AchievementsError';
import { achievementsFilter } from '../../utils/achievementsFilter';
import { AchievementsProgress } from '../achievementsProgress/AchievementsProgress';
import { achievementsSelector } from '../../store/selectors/selectors';
import { achievementsSort } from '../../utils/achievementsSort';
import { AchievementsToggle } from '../achievementsToggle/AchievementsToggle';
import { soundsClickTrigger } from '../../store/slices/soundsSlice';
import { Triangle } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import type { ToggleStatus } from '../../interfaces/interface.achievements';

const Achievements = (): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const { achievements, loading, error } = useSelector(achievementsSelector);
    const [filterStatus, setFilterStatus] = React.useState<ToggleStatus>('all');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFilterStatus(event.target.value as ToggleStatus);
        dispatch(soundsClickTrigger());
    };

    return (
        <section className={styles.achievements}>
            <h2 className={styles.achievements__title}>{error ? 'Error achievements loading' : 'Achievements'}</h2>

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
        </section>
    );
};

export { Achievements };
