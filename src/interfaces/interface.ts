import { UseAudioPlayer } from '../hooks/useAudioPlayer';

type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

type BooleanState = React.Dispatch<React.SetStateAction<boolean>>;
type IContextApp = {
    coins: string;
    creations: boolean;
    isAddedCoinToday: boolean;
    isLarge: boolean;
    isMedium: boolean;
    level: string;
    mainMusic: UseAudioPlayer;
    modalProject: number;
    modalProjectImage: number;
    music: boolean;
    navigationMobile: boolean;
    projectImages: string[];
    handleSoundClick: () => Promise<void> | null;
    handleSoundModal: () => Promise<void> | null;
    setAvailability: BooleanState;
    setChallenge: BooleanState;
    setCoins: React.Dispatch<React.SetStateAction<string>>;
    setCreations: BooleanState;
    setCredits: BooleanState;
    setIsAddedCoinToday: BooleanState;
    setLevel: React.Dispatch<React.SetStateAction<string>>;
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

export { BooleanState, IContextApp, Page };
