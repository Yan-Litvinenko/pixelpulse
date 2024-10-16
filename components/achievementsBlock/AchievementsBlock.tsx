'use client';

import React from 'react';
import AchievementsAchieve from '../achievementsAchieve/AchievementsAchieve';
import type { Rarity, ExecutionStatus, AchievementsBlockProps } from '@/interface/achievements/achievements.interface';

export default function AchievementsBlock(props: AchievementsBlockProps): React.JSX.Element {
    const { achievements, prefixForClassName } = props;

    if (!achievements.length) {
        return <></>;
    }

    return (
        <div className={prefixForClassName}>
            <span className={`${prefixForClassName}_block__title`}>
                {prefixForClassName === 'achieved' ? 'achieved:' : 'to be achieved:'}
            </span>
            <div className={`${prefixForClassName}_block__achievements`}>
                {achievements.map((achieve) => (
                    <AchievementsAchieve
                        date={achieve.date}
                        description={achieve.description}
                        key={achieve.description}
                        rarity={achieve.rarity as Rarity}
                        executionStatus={achieve.status as ExecutionStatus}
                        title={achieve.title}
                    />
                ))}
            </div>
        </div>
    );
}
