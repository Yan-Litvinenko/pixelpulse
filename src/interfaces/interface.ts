import { ICommitLog } from './interface.github';

type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

type BooleanState = React.Dispatch<React.SetStateAction<boolean>>;
type IAppContext = {
    commits: ICommitLog[] | undefined;
    creations: boolean;
    errorGithub: boolean;
    isLarge: boolean;
    isLoadingGithub: boolean;
    isMedium: boolean;
    music: boolean;
    navigationMobile: boolean;
    projectImages: string[];
    page: Page;
    setAvailability: BooleanState;
    setChallenge: BooleanState;
    setCreations: BooleanState;
    setCredits: BooleanState;
    setMusic: BooleanState;
    setNavigationMobile: BooleanState;
    setProjectImages: React.Dispatch<React.SetStateAction<string[]>>;
    setPage: (page: Page) => void;
    setSetting: BooleanState;
    setSocial: BooleanState;
    setSounds: BooleanState;
    sounds: boolean;
    styles: Record<string, string>;
    TRANSITION_TIME: number;
};

export { BooleanState, IAppContext, Page };
