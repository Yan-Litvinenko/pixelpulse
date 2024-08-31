import { createSlice } from '@reduxjs/toolkit';

type MediaQueryState = {
    readonly SMALL: number;
    readonly MEDIUM: number;
    isSmall: boolean;
    isMedium: boolean;
};

type SetMediaQueryState = Pick<MediaQueryState, 'isSmall' | 'isMedium'>;

const initialState: MediaQueryState = {
    SMALL: 768,
    MEDIUM: 1200,
    isSmall: false,
    isMedium: false,
};

const mediaQuerySlice = createSlice({
    name: 'mediaQuery',
    initialState,
    reducers: {
        setMediaState(state, action) {
            state.isSmall = (action.payload as SetMediaQueryState).isSmall;
            state.isMedium = (action.payload as SetMediaQueryState).isMedium;
        },
    },
});

export const { setMediaState } = mediaQuerySlice.actions;
export type { MediaQueryState };
export { mediaQuerySlice };
