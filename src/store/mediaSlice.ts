import { createSlice } from '@reduxjs/toolkit';

type MediaState = {
    readonly SMALL: number;
    readonly MEDIUM: number;
    isSmall: boolean;
    isMedium: boolean;
};

type SetMediaState = Pick<MediaState, 'isSmall' | 'isMedium'>;

const initialState: MediaState = {
    SMALL: 768,
    MEDIUM: 1200,
    isSmall: false,
    isMedium: false,
};

const mediaSlice = createSlice({
    name: 'mediaQuery',
    initialState,
    reducers: {
        setMediaState(state, action) {
            state.isSmall = (action.payload as SetMediaState).isSmall;
            state.isMedium = (action.payload as SetMediaState).isMedium;
        },
    },
});

export const { setMediaState } = mediaSlice.actions;
export { mediaSlice };
