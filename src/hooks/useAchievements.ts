import React from 'react';
import { fetchAchievements } from '../store/slices/achievementsSlice';
import { headerStatisticSelector } from '../store/selectors/selectors';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';

const useAchievements = (): void => {
    const dispatch = useDispatch<AppDispatch>();
    const { level } = headerStatisticSelector.statistic;

    React.useEffect(() => {
        dispatch(fetchAchievements());
    }, [level]);
};

export { useAchievements };
