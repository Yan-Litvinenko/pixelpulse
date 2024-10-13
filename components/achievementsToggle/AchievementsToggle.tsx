'use client';

import React from 'react';
import styles from '@/styles/components/achievementsToggle/AchievementsToggle.module.scss';
import type { AchievementsToggleProps } from '@/interface/achievements/achievements.interface';

export default function AchievementsToggle(props: AchievementsToggleProps): React.JSX.Element {
    const { checked, id, handleChange, textContent, value } = props;

    return (
        <label className={styles.label} htmlFor={id}>
            <input
                checked={checked}
                className={styles.label__input}
                id={id}
                name="achievements"
                onChange={handleChange}
                type="radio"
                value={value}
            />
            <div className={styles.label__checkbox}></div>
            <div className={styles.label__text}>{textContent}</div>
        </label>
    );
}
