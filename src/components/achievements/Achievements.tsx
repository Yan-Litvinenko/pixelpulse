import React, { Suspense } from 'react';
import { AchievementsBlock } from '../achievementsBlock/AchievementsBlock';
import { AchievementsError } from '../achievementsError/AchievementsError';
import { achievementsFilter, achievementsSort } from './achievementsLoader';
import { AchievementsProgress } from '../achievementsProgress/AchievementsProgress';
import { AchievementsToggle } from '../achievementsToggle/AchievementsToggle';
import { Await, useLoaderData } from 'react-router-dom';
import { IAchieve, ToggleStatus } from '../../interfaces/interface.achievements';
import { ResolveError } from '../../interfaces/interface.loader';
import { Triangle } from 'react-loader-spinner';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './Achievements.module.scss';

const Achievements = (): React.JSX.Element => {
    const { handleSoundClick } = useAppContext();
    const { achievements } = useLoaderData() as { achievements: IAchieve[] };
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
                    <Suspense
                        fallback={
                            <Triangle
                                ariaLabel="triangle-loading"
                                color=""
                                height="120"
                                visible={true}
                                width="120"
                                wrapperClass={styles.loader}
                                wrapperStyle={{}}
                            />
                        }
                    >
                        <Await resolve={achievements}>
                            {(resolveAchievements: ResolveError | IAchieve[]) => {
                                if ((resolveAchievements as ResolveError).status === '404') {
                                    return <AchievementsError />;
                                }

                                return (
                                    <>
                                        <AchievementsBlock
                                            prefixForClassName={'achieved'}
                                            achievements={achievementsSort(
                                                achievementsFilter(
                                                    resolveAchievements as IAchieve[],
                                                    filterStatus,
                                                    'achieved',
                                                ),
                                            )}
                                        />
                                        <AchievementsBlock
                                            prefixForClassName={'ongoing'}
                                            achievements={achievementsSort(
                                                achievementsFilter(
                                                    resolveAchievements as IAchieve[],
                                                    filterStatus,
                                                    'in progress',
                                                ),
                                            )}
                                        />
                                    </>
                                );
                            }}
                        </Await>
                    </Suspense>
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
