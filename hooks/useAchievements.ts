import React from 'react';
import { fetchAchievements } from '@/redux/slice/achievementsSlice';
import { headerStatisticSelector } from '@/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/redux/store';

export default function useAchievements(): void {
    const dispatch = useDispatch<AppDispatch>();
    const { level } = useSelector(headerStatisticSelector).statistic;

    React.useEffect(() => {
        dispatch(fetchAchievements());
    }, [level]);
}
