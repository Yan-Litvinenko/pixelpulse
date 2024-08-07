import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchHeaderStatistic } from '../store/headerStatisticSlice';
import type { AppDispatch } from '../store/store';

const useHeaderStatistic = (): void => {
    const dispatch = useDispatch<AppDispatch>();

    React.useEffect(() => {
        dispatch(fetchHeaderStatistic());
    }, []);
};

export { useHeaderStatistic };
