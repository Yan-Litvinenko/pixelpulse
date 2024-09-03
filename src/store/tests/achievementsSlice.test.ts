import { achievementsSelector } from '../selectors';
import { achievementsSlice } from '../slices/achievementsSlice';
import type { AchievementsSlice } from '../slices/achievementsSlice';
import type { RootState } from '../store';
import type { UnknownAction } from '@reduxjs/toolkit';

const initialState: AchievementsSlice = {
    amountAchieved: null,
    amountAchievements: null,
    percent: null,
    achievements: null,
    loading: false,
    error: null,
};

describe('achievementsSlice', (): void => {
    test('Should return empty state when passed an empty action', (): void => {
        const defaultState: AchievementsSlice = achievementsSlice.reducer(undefined, {} as UnknownAction);
        expect(defaultState).toEqual(initialState);
    });

    test('Selector should return correct achievements slice from the store', (): void => {
        expect(achievementsSelector({ achievements: initialState } as RootState)).toEqual(initialState);
    });
});
