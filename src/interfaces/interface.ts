import { IUseAchievements } from '../hooks/useAchievements';
import { IUseHeaderStatistic } from '../hooks/useHeaderStatistics';
import { UseAudioPlayer } from '../hooks/useAudioPlayer';
import { IUseModal } from '../hooks/useModal';

type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

type IContextApp = {
    achievements: IUseAchievements;
    availability: IUseModal;
    challenge: IUseModal;
    creations: IUseModal;
    credits: IUseModal;
    headerStatistic: IUseHeaderStatistic;
    mainMusic: UseAudioPlayer;
    music: boolean;
    navigationMobile: IUseModal;
    projectImages: string[];
    setting: IUseModal;
    social: IUseModal;
    sounds: boolean;
    styles: Record<string, string>;
    targetImage: number;
    targetProject: number;
    TRANSITION_TIME: number;
    setTargetImage: React.Dispatch<React.SetStateAction<number>>;
    setTargetProject: React.Dispatch<React.SetStateAction<number>>;
    handleSoundClick: () => Promise<void> | null;
    setMusic: React.Dispatch<React.SetStateAction<boolean>>;
    setProjectImages: React.Dispatch<React.SetStateAction<string[]>>;
    setSounds: React.Dispatch<React.SetStateAction<boolean>>;
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
