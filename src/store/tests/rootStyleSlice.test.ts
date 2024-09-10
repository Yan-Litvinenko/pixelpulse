import { rootStyleSlice, installRootStyles } from '../slices/rootStyleSlice';
import { rootStylesSelector } from '../selectors';
import type { RootState } from '../store';
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
        const result: RootStyleSlice = rootStyleSlice.reducer(
            undefined,
            {} as { type: string },
        );
        expect(result).toEqual(initialState);
    });

    test('Selector should return correct rootStyle slice from the store', (): void => {
        expect(
            rootStylesSelector({ rootStyles: initialState } as RootState),
        ).toEqual(initialState);
    });

    test('Should install app styles', (): void => {
        const installStyles = {
            wrapper: 'wrapper',
            navigation: 'navigation',
        } as RootStyleSlice;
        const result: RootStyleSlice = rootStyleSlice.reducer(
            initialState,
            installRootStyles(installStyles),
        );

        expect(result.wrapper).toBe('wrapper');
        expect(result.navigation).toBe('navigation');
    });
});
