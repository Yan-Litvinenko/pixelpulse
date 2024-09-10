import React from 'react';
import styles from './AchievementsBlock.module.scss';
import { AchievementsAchieve } from '../achievementsAchieve/AchievementsAchieve';
import { nanoid } from '@reduxjs/toolkit';
import type {
    IAchievementsBlock,
    ExecutionStatus,
    Rarity,
} from '../../interfaces/interface.achievements';

const AchievementsBlock = (props: IAchievementsBlock): React.JSX.Element => {
    const { achievements, prefixForClassName } = props;

    return (
        <>
            {achievements.length ? (
                <div
                    className={styles[prefixForClassName]}
                    data-testId={'achievements-block'}
                >
                    <span className={styles[`${prefixForClassName}__title`]}>
                        {prefixForClassName === 'achieved'
                            ? 'achieved:'
                            : 'to be achieved:'}
                    </span>
                    <div
                        className={
                            styles[`${prefixForClassName}__achievements`]
                        }
                    >
                        {achievements.map((achieve) => (
                            <AchievementsAchieve
                                date={achieve.date}
                                description={achieve.description}
                                key={nanoid()}
                                rarity={achieve.rarity as Rarity}
                                executionStatus={
                                    achieve.status as ExecutionStatus
                                }
                                title={achieve.title}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export { AchievementsBlock };
