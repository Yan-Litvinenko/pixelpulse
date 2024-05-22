import { IAchieve } from './interface.achievements';
import { ICommitLog } from './interface.github';
import { UseAudioPlayer } from '../hooks/useAudioPlayer';

type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

type BooleanState = React.Dispatch<React.SetStateAction<boolean>>;
type IAppContext = {
    achievements: IAchieve[];
    coins: string;
    commits: ICommitLog[];
    creations: boolean;
    errorGithub: boolean;
    isAddedCoinToday: boolean;
    isLarge: boolean;
    isLoadingGithub: boolean;
    isMedium: boolean;
    level: string;
    mainMusic: UseAudioPlayer;
    modalProject: number;
    music: boolean;
    navigationMobile: boolean;
    projectImages: string[];
    handleSoundClick: () => Promise<void> | null;
    handleSoundModal: () => Promise<void> | null;
    setAchievements: React.Dispatch<React.SetStateAction<IAchieve[]>>;
    setAvailability: BooleanState;
    setChallenge: BooleanState;
    setCoins: React.Dispatch<React.SetStateAction<string>>;
    setCreations: BooleanState;
    setCredits: BooleanState;
    setIsAddedCoinToday: BooleanState;
    setLevel: React.Dispatch<React.SetStateAction<string>>;
    setModalProject: React.Dispatch<React.SetStateAction<number>>;
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

export { BooleanState, IAppContext, Page };
