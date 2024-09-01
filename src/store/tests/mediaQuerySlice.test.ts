import { mediaQuerySelector } from '../selectors/selectors';
import { mediaQuerySlice, setMediaState } from '../slices/mediaQuerySlice';
import type { MediaQueryState } from '../slices/mediaQuerySlice';
import type { RootState } from '../store';

const initialState: MediaQueryState = {
    SMALL: 768,
    MEDIUM: 1200,
    isSmall: false,
    isMedium: false,
};

describe('meduaQuerySlice', (): void => {
    test('Should return empty state when passed an empty action', (): void => {
        const result: MediaQueryState = mediaQuerySlice.reducer(undefined, {} as { type: string });
        expect(result).toEqual(initialState);
    });

    test('Selector should return correct mediaQuery slice from the store', (): void => {
        expect(mediaQuerySelector({ mediaQuery: initialState } as RootState)).toEqual(initialState);
    });

    test('Should set media state', (): void => {
        const updateMediaQueryState = {
            isSmall: true,
            isMedium: true,
        } as MediaQueryState;

        const updateState: MediaQueryState = mediaQuerySlice.reducer(
            initialState,
            setMediaState(updateMediaQueryState),
        );

        expect(updateState.isSmall).toBe(true);
        expect(updateState.isMedium).toBe(true);
    });
});
