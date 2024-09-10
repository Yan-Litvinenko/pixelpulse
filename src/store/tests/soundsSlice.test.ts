import { soundsSelector } from '../selectors';
import { soundsSlice, setStateSounds } from '../slices/soundsSlice';
import type { RootState } from '../store';
import type { SoundsSlice } from '../slices/soundsSlice';

const initState: SoundsSlice = {
    linkGlitchEffect: 'test-file-stub',
    linkSoundClick: 'test-file-stub',
    linkSoundModal: 'test-file-stub',
    soundsState: true,
    stateClickTrigger: false,
    stateGlitchTrigger: false,
    stateModalTrigger: false,
};

describe('soundsSlice', (): void => {
    test('Should return empty state when passed an empty action', (): void => {
        const defaultState: SoundsSlice = soundsSlice.reducer(
            undefined,
            {} as { type: string },
        );
        expect(defaultState).toEqual(initState);
    });

    test('Selector should return correct sounds slice from the store', (): void => {
        expect(soundsSelector({ sounds: initState } as RootState)).toEqual(
            initState,
        );
    });

    test('Should set inverse sounds state', (): void => {
        const updateState: SoundsSlice = soundsSlice.reducer(
            initState,
            setStateSounds(),
        );
        expect(updateState.soundsState).not.toBe(initState.soundsState);
    });
});
