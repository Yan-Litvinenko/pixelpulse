import React from 'react';
import AchievementsContent from '@/components/achievementsContent/AchievementsContent';
import styles from '@/styles/components/achievements/Achievements.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Achievements',
    description: 'My professional achievements',
    openGraph: {
        title: 'Achievements',
        url: 'https://pixelpulse.by/achievements',
    },
    twitter: {
        title: 'Achievements',
        description: 'My professional achievements',
    },
};

export default function Achievements(): React.JSX.Element {
    return (
        <section className={styles.achievements}>
            <h2 className={styles.achievements__title}>{'Achievements'}</h2>
            <AchievementsContent />
        </section>
    );
}
