import linkAutomataMusic from '../assets/audio/main-theme.mp3';
import linkSnakeMusic from '../assets/audio/snake.mp3';
import { createSlice } from '@reduxjs/toolkit';
import { getValueToLocalStorage } from '../utils/getValueToLocalStorage';
import type { PayloadAction } from '@reduxjs/toolkit';

type MusicSlice = {
    linkActiveMusicTheme: string;
    linkAutomataMusic: string;
    linkSnakeMusic: string;
    musicState: boolean;
};

const initialState: MusicSlice = {
    linkActiveMusicTheme: linkAutomataMusic,
    linkAutomataMusic,
    linkSnakeMusic,
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
            console.log('смена темы на:', actions.payload);
        },
    },
});

export const { setStateMusic, setActiveMusicTheme } = musicSlice.actions;
export { musicSlice };
