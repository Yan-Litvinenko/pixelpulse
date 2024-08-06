import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAchievements } from '../store/achievementsSlice';
import type { AppDispatch, RootState } from '../store/store';

const useAchievements = (): void => {
    const dispatch = useDispatch<AppDispatch>();
    const { level } = useSelector((state: RootState) => state.headerStatistic.statistic);

    React.useEffect(() => {
        dispatch(fetchAchievements());
    }, [level]);
};

export { useAchievements };
