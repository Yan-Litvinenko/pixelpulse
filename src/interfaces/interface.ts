import { UseAudioPlayer } from '../hooks/useAudioPlayer';

type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

type BooleanState = React.Dispatch<React.SetStateAction<boolean>>;
type IContextApp = {
    creations: boolean;
    isLarge: boolean;
    isMedium: boolean;
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

export { BooleanState, IContextApp, Page };
