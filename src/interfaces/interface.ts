type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

interface Settings {
    [key: string]: boolean;
}

interface SettingContext {
    settingStatuses: Settings;
    setSettingStatuses: React.Dispatch<React.SetStateAction<Settings>>;
}

type BooleanState = React.Dispatch<React.SetStateAction<boolean>>;

type IAppContext = {
    TRANSITION_TIME: number;
    setSocial: BooleanState;
    setAvailability: BooleanState;
    setCredits: BooleanState;
    setSetting: BooleanState;
    setPage: (page: Page) => void;
    setMusic: BooleanState;
    setSounds: BooleanState;
    setNavigationMobile: BooleanState;
    commits: ICommitLog[] | undefined;
    isMedium: boolean;
    isLarge: boolean;
    isLoadingGithub: boolean;
    music: boolean;
    navigationMobile: boolean;
    page: Page;
    sounds: boolean;
    styles: Record<string, string>;
};

interface ICommitLog {
    message: string;
    date: string;
}

type Rarity = 'legendary' | 'epic' | 'rare' | 'unusual';
type SwitchAchieved = 'all' | 'achieved' | 'inProgress';

export { IAppContext, SettingContext, BooleanState, Page, ICommitLog, Rarity, SwitchAchieved };
