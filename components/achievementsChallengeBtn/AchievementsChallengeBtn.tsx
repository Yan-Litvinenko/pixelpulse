'use client';

import React from 'react';
import styles from '@/styles/components/achievementsChallengeBtn/AchievementsChallengeBtn.module.scss';
import { modalOpenHandler } from '@/redux/slice/modalSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/redux/store';

export default function AchievementsChallengeBtn(): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <button className={styles.btn} onClick={() => dispatch(modalOpenHandler({ key: 'challenge' }))} type="button">
            Challenge me
        </button>
    );
}
