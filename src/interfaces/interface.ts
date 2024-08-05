import type { IUseAchievements } from '../hooks/useAchievements';
import type { IUseHeaderStatistic } from '../hooks/useHeaderStatistics';
import type { UseAudioPlayer } from '../hooks/useAudioPlayer';

type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

type IContextApp = {
    achievements: IUseAchievements;
    headerStatistic: IUseHeaderStatistic;
    mainMusic: UseAudioPlayer;
    music: boolean;
    sounds: boolean;
    styles: Record<string, string>;
    handleSoundClick: () => Promise<void> | null;
    setMusic: React.Dispatch<React.SetStateAction<boolean>>;
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
