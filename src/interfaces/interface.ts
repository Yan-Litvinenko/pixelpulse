import { ICommitLog } from './interface.github';
import { UseAudioPlayer } from '../hooks/useAudioPlayer';

type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

type BooleanState = React.Dispatch<React.SetStateAction<boolean>>;
type IAppContext = {
    coins: number;
    commits: ICommitLog[];
    creations: boolean;
    errorGithub: boolean;
    isAddedCoinToday: boolean;
    isLarge: boolean;
    isLoadingGithub: boolean;
    isMedium: boolean;
    level: number;
    mainMusic: UseAudioPlayer;
    modalProject: number;
    music: boolean;
    navigationMobile: boolean;
    projectImages: string[];
    handleSoundClick: () => Promise<void> | null;
    handleSoundModal: () => Promise<void> | null;
    setAvailability: BooleanState;
    setChallenge: BooleanState;
    setCoins: React.Dispatch<React.SetStateAction<number>>;
    setCreations: BooleanState;
    setCredits: BooleanState;
    setIsAddedCoinToday: BooleanState;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
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
