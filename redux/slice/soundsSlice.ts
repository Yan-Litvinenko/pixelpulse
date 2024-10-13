import getValueToLocalStorage from '@/helpers/getValueToLocalStorage';
import { createSlice } from '@reduxjs/toolkit';

type SoundsSlice = {
    readonly linkGlitchEffect: string;
    readonly linkSoundClick: string;
    readonly linkSoundModal: string;
    soundsState: boolean;
    stateClickTrigger: boolean;
    stateGlitchTrigger: boolean;
    stateModalTrigger: boolean;
};

const initialState: SoundsSlice = {
    linkGlitchEffect: '/assets/audio/glitch.mp3',
    linkSoundClick: '/assets/audio/click.ogg',
    linkSoundModal: '/assets/audio/modal.mp3',
    soundsState: getValueToLocalStorage<boolean>('pixelpulse-sounds-state', true),
    stateClickTrigger: false,
    stateGlitchTrigger: false,
    stateModalTrigger: false,
};

const soundsSlice = createSlice({
    name: 'sounds',
    initialState,
    reducers: {
        setStateSounds(state) {
            state.soundsState = !state.soundsState;
        },
        soundsClickTrigger(state) {
            state.stateClickTrigger = !state.stateClickTrigger;
        },
        soundsModalTrigger(state) {
            state.stateModalTrigger = !state.stateModalTrigger;
        },
        soundsGlitchTrigger(state) {
            state.stateGlitchTrigger = !state.stateGlitchTrigger;
        },
    },
});

export const { setStateSounds, soundsModalTrigger, soundsClickTrigger, soundsGlitchTrigger } = soundsSlice.actions;
export type { SoundsSlice };
export default soundsSlice.reducer;
