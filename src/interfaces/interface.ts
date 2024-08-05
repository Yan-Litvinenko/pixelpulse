import type { IUseAchievements } from '../hooks/useAchievements';
import type { IUseHeaderStatistic } from '../hooks/useHeaderStatistics';
import type { UseAudioPlayer } from '../hooks/useAudioPlayer';

type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

type IContextApp = {
    achievements: IUseAchievements;
    headerStatistic: IUseHeaderStatistic;
    mainMusic: UseAudioPlayer;
    music: boolean;
    projectImages: string[];
    sounds: boolean;
    styles: Record<string, string>;
    targetImage: number;
    targetProject: number;
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

export type { IContextApp, Page, IAddCoinResult, ResolveError };
