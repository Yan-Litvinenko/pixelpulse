import React from 'react';
import getValueToLocalStorage from '@/helpers/getValueToLocalStorage';
import setValueToLocalStorage from '@/helpers/setValueToLocalStorage';
import { fetchHeaderStatistic } from '@/redux/slice/headerStatisticSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/redux/store';

export default function useHeaderStatistic(): void {
    const dispatch = useDispatch<AppDispatch>();

    React.useEffect(() => {
        dispatch(fetchHeaderStatistic());

        const addCoinStatus = getValueToLocalStorage<number | null>('pixelpulse-added-coin-status', null);

        if (!addCoinStatus) {
            setValueToLocalStorage('pixelpulse-added-coin-status', 0);
        }
    }, []);
}
