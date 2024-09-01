import { musicSlice, setStateMusic, setActiveMusicTheme } from '../slices/musicSlice';
import { musicSelector } from '../selectors/selectors';
import type { MusicSlice } from '../slices/musicSlice';
import type { RootState } from '../store';

const initialState: MusicSlice = {
    linkActiveMusicTheme: 'test-file-stub',
    linkAutomataMusic: 'test-file-stub',
    linkSnakeMusic: 'test-file-stub',
    musicState: true,
};

describe('musicSlice', (): void => {
    test('Should return empty state when passed an empty action', (): void => {
        const updateState: MusicSlice = musicSlice.reducer(undefined, {} as { type: string });
        expect(updateState).toEqual(initialState);
    });

    test('Selector should return correct rootStyle slice from the store', (): void => {
        expect(musicSelector({ music: initialState } as RootState)).toEqual(initialState);
    });

    test('Should set music state', (): void => {
        const updateState: MusicSlice = musicSlice.reducer(initialState, setStateMusic());
        expect(updateState.musicState).not.toBe(initialState.musicState);
    });

    test('Should set active music theme', (): void => {
        const updateMusicTheme: string = 'Rammstein: Du hast';
        const updateState: MusicSlice = musicSlice.reducer(initialState, setActiveMusicTheme(updateMusicTheme));

        expect(updateState.linkActiveMusicTheme).toBe(updateMusicTheme);
    });
});
