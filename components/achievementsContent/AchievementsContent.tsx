'use client';

import React from 'react';
import styles from '@/styles/components/achievementsContent/AchievementsContent.module.scss';
import AchievementsBlock from '@/components/achievementsBlock/AchievementsBlock';
import achievementsFilter from '@/helpers/achievements/achievementsFilter';
import AchievementsProgress from '@/components/achievementsProgress/AchievementsProgress';
import achievementsSort from '@/helpers/achievements/achievementsSort';
import AchievementsToggle from '@/components/achievementsToggle/AchievementsToggle';
import AchievementsError from '../achievementsError/AchievementsError';
import useClient from '@/hooks/useClient';
import { Triangle } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { achievementsSelector } from '@/redux/selectors';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import type { ToggleStatus } from '@/interface/achievements/achievements.interface';
import type { AppDispatch } from '@/redux/store';

export default function AchievementsContent(): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const { achievements, loading, error } = useSelector(achievementsSelector);
    const [filterStatus, setFilterStatus] = React.useState<ToggleStatus>('all');
    const isClient = useClient();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFilterStatus(event.target.value as ToggleStatus);
        dispatch(soundsClickTrigger());
    };

    return (
        <section className={styles.achievements__content}>
            <AchievementsProgress />

            <article className={styles.achievements__achievements}>
                {isClient ? (
                    loading ? (
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
                    )
                ) : (
                    <></>
                )}
            </article>

            <form className={styles.switchers}>
                <AchievementsToggle
                    checked={filterStatus === 'all'}
                    id="all"
                    handleChange={handleChange}
                    textContent="all"
                    value={'all'}
                />
                <AchievementsToggle
                    checked={filterStatus === 'achieved'}
                    id="achieved"
                    handleChange={handleChange}
                    textContent="achieved"
                    value={'achieved'}
                />
                <AchievementsToggle
                    checked={filterStatus === 'inProgress'}
                    id="inProgress"
                    handleChange={handleChange}
                    textContent="in progress"
                    value={'inProgress'}
                />
            </form>
        </section>
    );
}
