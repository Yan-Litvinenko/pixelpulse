import { ICommitLog } from './interface.github';

type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

type BooleanState = React.Dispatch<React.SetStateAction<boolean>>;
type IAppContext = {
    commits: ICommitLog[];
    creations: boolean;
    errorGithub: boolean;
    isLarge: boolean;
    isLoadingGithub: boolean;
    isMedium: boolean;
    modalProject: number;
    music: boolean;
    navigationMobile: boolean;
    page: Page;
    projectImages: string[];
    changeStateMusic: (state: boolean) => void;
    handleSoundClick: () => Promise<void> | null;
    setAvailability: BooleanState;
    setChallenge: BooleanState;
    setCreations: BooleanState;
    setCredits: BooleanState;
    setModalProject: React.Dispatch<React.SetStateAction<number>>;
    setMusic: BooleanState;
    setNavigationMobile: BooleanState;
    setPage: (page: Page) => void;
    setProjectImages: React.Dispatch<React.SetStateAction<string[]>>;
    setSetting: BooleanState;
    setSocial: BooleanState;
    setSounds: BooleanState;
    sounds: boolean;
    styles: Record<string, string>;
    TRANSITION_TIME: number;
};

export { BooleanState, IAppContext, Page };
