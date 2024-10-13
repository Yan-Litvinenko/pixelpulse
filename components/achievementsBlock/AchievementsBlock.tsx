'use client';

import React from 'react';
import AchievementsAchieve from '../achievementsAchieve/AchievementsAchieve';
import styles from '@/styles/components/achievementsBlock/AchievementsBlock.module.scss';
import { nanoid } from '@reduxjs/toolkit';
import type { Rarity, ExecutionStatus, AchievementsBlockProps } from '@/interface/achievements/achievements.interface';

export default function AchievementsBlock(props: AchievementsBlockProps): React.JSX.Element {
    const { achievements, prefixForClassName } = props;

    if (!achievements.length) {
        return <></>;
    }

    return (
        <div className={styles[prefixForClassName]}>
            <span className={styles[`${prefixForClassName}__title`]}>
                {prefixForClassName === 'achieved' ? 'achieved:' : 'to be achieved:'}
            </span>
            <div className={styles[`${prefixForClassName}__achievements`]}>
                {achievements.map((achieve) => (
                    <AchievementsAchieve
                        date={achieve.date}
                        description={achieve.description}
                        key={nanoid()}
                        rarity={achieve.rarity as Rarity}
                        executionStatus={achieve.status as ExecutionStatus}
                        title={achieve.title}
                    />
                ))}
            </div>
        </div>
    );
}
