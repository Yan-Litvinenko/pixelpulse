import { headerStatisticSlice } from '../slices/headerStatisticSlice';
import { headerStatisticSelector } from '../selectors';
import type { HeaderStatistic } from '../slices/headerStatisticSlice';
import type { RootState } from '../store';

describe('headerStatistic', (): void => {
    const initState: HeaderStatistic = {
        statistic: {
            level: null,
            coins: null,
            addStatus: false,
        },
        loading: false,
        error: null,
    };

    test('Should return empty state when passed an empty action', (): void => {
        const updateState: HeaderStatistic = headerStatisticSlice.reducer(undefined, {} as { type: string });
        expect(updateState).toEqual(initState);
    });

    test('Selector should return correct headerStatisticSlice from the store', (): void => {
        expect(headerStatisticSelector({ headerStatistic: initState } as RootState)).toEqual(initState);
    });
});
