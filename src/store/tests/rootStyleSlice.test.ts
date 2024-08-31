import { rootStyleSlice, installRootStyles } from '../slices/rootStyleSlice';
import type { UnknownAction } from '@reduxjs/toolkit';
import type { RootStyleSlice } from '../slices/rootStyleSlice';

const initialState: RootStyleSlice = {
    wrapper: '',
    wrapperCenterRotate: '',
    wrapperLeftRotate: '',
    navigation: '',
    navigationList: '',
};

describe('rootStyleSlice', (): void => {
    test('Should return empty state when passed an empty action', (): void => {
        const result: RootStyleSlice = rootStyleSlice.reducer(undefined, { type: 'unknown' } as UnknownAction);
        expect(result).toEqual(initialState);
    });

    test('Should install app styles', (): void => {
        const installStyles = {
            wrapper: 'wrapper',
            navigation: 'navigation',
        } as RootStyleSlice;
        const result: RootStyleSlice = rootStyleSlice.reducer(initialState, installRootStyles(installStyles));

        expect(result.wrapper).toBe('wrapper');
        expect(result.navigation).toBe('navigation');
    });
});
