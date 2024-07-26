import { IUseAchievements } from '../hooks/useAchievements';
import { IUseHeaderStatistic } from '../hooks/useHeaderStatistics';
import { UseAudioPlayer } from '../hooks/useAudioPlayer';

type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';
type HashKey = 'level' | 'coins' | 'addStatus';

type BooleanState = React.Dispatch<React.SetStateAction<boolean>>;
type IContextApp = {
    achievements: IUseAchievements;
    creations: boolean;
    isLarge: boolean;
    isMedium: boolean;
    mainMusic: UseAudioPlayer;
    modalProject: number;
    modalProjectImage: number;
    headerStatistic: IUseHeaderStatistic;
    music: boolean;
    navigationMobile: boolean;
    projectImages: string[];
    handleSoundClick: () => Promise<void> | null;
    handleSoundModal: () => Promise<void> | null;
    setAvailability: BooleanState;
    setChallenge: BooleanState;
    setCreations: BooleanState;
    setCredits: BooleanState;
    setModalProject: React.Dispatch<React.SetStateAction<number>>;
    setModalProjectImage: React.Dispatch<React.SetStateAction<number>>;
    setMusic: BooleanState;
    setNavigationMobile: BooleanState;
    setProjectImages: React.Dispatch<React.SetStateAction<string[]>>;
    setSetting: BooleanState;
    setSocial: BooleanState;
    setSounds: BooleanState;
    sounds: boolean;
    styles: Record<string, string>;
    TRANSITION_TIME: number;
};

interface IAddCoinResult {
    level: number;
    coins: number;
    addStatus: boolean;
    isLoad: boolean;
}

export { BooleanState, IContextApp, Page, HashKey, IAddCoinResult };
