import { IUseAchievements } from '../hooks/useAchievements';
import { IUseHeaderStatistic } from '../hooks/useHeaderStatistics';
import { UseAudioPlayer } from '../hooks/useAudioPlayer';

type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

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
    setAvailability: React.Dispatch<React.SetStateAction<boolean>>;
    setChallenge: React.Dispatch<React.SetStateAction<boolean>>;
    setCreations: React.Dispatch<React.SetStateAction<boolean>>;
    setCredits: React.Dispatch<React.SetStateAction<boolean>>;
    setModalProject: React.Dispatch<React.SetStateAction<number>>;
    setModalProjectImage: React.Dispatch<React.SetStateAction<number>>;
    setMusic: React.Dispatch<React.SetStateAction<boolean>>;
    setNavigationMobile: React.Dispatch<React.SetStateAction<boolean>>;
    setProjectImages: React.Dispatch<React.SetStateAction<string[]>>;
    setSetting: React.Dispatch<React.SetStateAction<boolean>>;
    setSocial: React.Dispatch<React.SetStateAction<boolean>>;
    setSounds: React.Dispatch<React.SetStateAction<boolean>>;
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

interface ResolveError {
    status: string;
    message: string;
}

export { IContextApp, Page, IAddCoinResult, ResolveError };
