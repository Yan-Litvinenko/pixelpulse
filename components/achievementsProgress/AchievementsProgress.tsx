'use client';

import React from 'react';
import AchievementsChallengeBtn from '../achievementsChallengeBtn/AchievementsChallengeBtn';
import AchievementsProgressRing from '../achievementsProgressRing/AchievementsProgressRing';
import { achievementsSelector } from '@/redux/selectors';
import { useSelector } from 'react-redux';

export default function AchievementsProgress(): React.JSX.Element {
    const { error, loading, amountAchieved, amountAchievements, percent } = useSelector(achievementsSelector);

    return (
        <section className={'achievements_progress'}>
            <div className={'achievements_progress__inner'}>
                {loading || error ? (
                    <>
                        <AchievementsProgressRing percent={100} />
                        <span className={'achievements_progress__statistic'}>0/0</span>
                    </>
                ) : (
                    <>
                        <AchievementsProgressRing percent={Number(percent)} />
                        <span className={'achievements_progress__statistic'}>
                            {Number(amountAchieved)}/{Number(amountAchievements)}
                        </span>
                    </>
                )}

                <span className={'achievements_progress__name'}>progress</span>
            </div>

            <p className={'achievements_progress__text'}>
                I have created a set of achievements for myself and I use this page to track them.
            </p>
            <p className={'achievements_progress__text'}>
                If you want to give me a challenge and rate it, please feel free to submit it with the button below!
            </p>

            <AchievementsChallengeBtn />
        </section>
    );
}
