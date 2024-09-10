import linkSoundClick from '../../assets/audio/click.ogg';
import linkSoundModal from '../../assets/audio/modal.mp3';
import linkGlitchEffect from '../../assets/audio/glitch.mp3';
import { createSlice } from '@reduxjs/toolkit';
import { getValueToLocalStorage } from '../../utils/getValueToLocalStorage';

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
    linkGlitchEffect,
    linkSoundClick,
    linkSoundModal,
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
export { soundsSlice };
