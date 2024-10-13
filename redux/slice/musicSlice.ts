import getValueToLocalStorage from '@/helpers/getValueToLocalStorage';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type MusicSlice = {
    linkActiveMusicTheme: string;
    linkAutomataMusic: string;
    linkSnakeMusic: string;
    musicState: boolean;
};

const initialState: MusicSlice = {
    linkActiveMusicTheme: '/assets/audio/main-theme.mp3',
    linkAutomataMusic: '/assets/audio/main-theme.mp3',
    linkSnakeMusic: '/assets/audio/snake.mp3',
    musicState: getValueToLocalStorage('pixelpulse-music-state', true),
};

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        setStateMusic(state): void {
            state.musicState = !state.musicState;
        },

        setActiveMusicTheme(state, actions: PayloadAction<string>): void {
            state.linkActiveMusicTheme = actions.payload;
        },
    },
});

export const { setStateMusic, setActiveMusicTheme } = musicSlice.actions;
export type { MusicSlice };
export default musicSlice.reducer;
