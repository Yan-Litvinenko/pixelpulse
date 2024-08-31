import {
    achievementsSelector,
    creationsSelector,
    headerStatisticSelector,
    mediaQuerySelector,
    musicSelector,
    rootStylesSelector,
    soundsSelector,
} from '../selectors/selectors';
import type { AchievementsSlice } from '../slices/achievementsSlice';
import type { CreationsSlice } from '../slices/creationsSlice';
import type { HeaderStatistic } from '../slices/headerStatisticSlice';
import type { IProject } from '../../interfaces/interface.creations';
import type { MediaQueryState } from '../slices/mediaQuerySlice';
import type { MusicSlice } from '../slices/musicSlice';
import type { RootState } from '../store';
import type { RootStyleSlice } from '../slices/rootStyleSlice';
import type { SoundsSlice } from '../slices/soundsSlice';

describe('Redux selectors', (): void => {
    test('Selector should return correct rootStyle slice from the store', (): void => {
        const mockRootStyleState: RootStyleSlice = {
            wrapper: 'wrapper_class',
            wrapperCenterRotate: 'wrapper_center_class',
            wrapperLeftRotate: 'wrapper_left_class',
            navigation: 'navigation_class',
            navigationList: 'navigation_list_class',
        };

        expect(rootStylesSelector({ rootStyles: mockRootStyleState } as RootState)).toEqual(mockRootStyleState);
    });

    test('Selector should return correct sounds slice from the store', (): void => {
        const mockSoundsState: SoundsSlice = {
            linkGlitchEffect: 'linkGlitchEffect',
            linkSoundClick: 'linkSoundClick',
            linkSoundModal: 'linkSoundModal',
            soundsState: jest.fn().mockReturnValue(true) as unknown as boolean,
            stateClickTrigger: false,
            stateGlitchTrigger: false,
            stateModalTrigger: false,
        };

        expect(soundsSelector({ sounds: mockSoundsState } as RootState)).toEqual(mockSoundsState);
    });

    test('Selector should return correct achievements slice from the store', (): void => {
        const mockAchievements: AchievementsSlice = {
            amountAchieved: null,
            amountAchievements: null,
            percent: null,
            achievements: null,
            loading: false,
            error: null,
        };

        expect(achievementsSelector({ achievements: mockAchievements } as RootState)).toEqual(mockAchievements);
    });

    test('Selector should return correct music slice from the store', () => {
        const mockMusic: MusicSlice = {
            linkActiveMusicTheme: 'linkAutomataMusic',
            linkAutomataMusic: 'linkAutomataMusic',
            linkSnakeMusic: 'linkSnakeMusic',
            musicState: jest.fn().mockReturnValue(true) as unknown as boolean,
        };

        expect(musicSelector({ music: mockMusic } as RootState)).toEqual(mockMusic);
    });

    test('Selector should return correct headerStatistic slice from the store', () => {
        const mockHeaderStatistic: HeaderStatistic = {
            statistic: {
                level: null,
                coins: null,
                addStatus: false,
            },
            loading: false,
            error: null,
        };

        expect(headerStatisticSelector({ headerStatistic: mockHeaderStatistic } as RootState)).toEqual(
            mockHeaderStatistic,
        );
    });
    test('Selector should return correct mediaQuery slice from the store', () => {
        const mockMediaQuery: MediaQueryState = {
            SMALL: 768,
            MEDIUM: 1200,
            isSmall: false,
            isMedium: false,
        };

        expect(mediaQuerySelector({ mediaQuery: mockMediaQuery } as RootState)).toEqual(mockMediaQuery);
    });

    test('Selector should return correct creations slice from the store', () => {
        const mockCreations: CreationsSlice = {
            defaultProject: {
                about: [
                    'The site design is made in the style of a computer game. It describes my achievements and skills, information about my life and goals.',
                ],
                brief: 'reflects growth in educational or professional achievements',
                images: [''],
                link: '',
                name: 'pixelpulse',
                technologies: ['ts', 'react', 'redux', 'nodeJS', 'mysql'],
            },
            targetProject: 0,
            targetImage: 0,
            projects: [] as IProject[],
            projectImages: [],
        };

        expect(creationsSelector({ creations: mockCreations } as RootState)).toEqual(mockCreations);
    });
});
