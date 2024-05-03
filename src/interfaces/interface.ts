import { IContactFormData, IContactFieldsStatus, IFormError } from './interface.form';

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
    setAvailability: BooleanState;
    setChallenge: BooleanState;
    setContactFieldsStatus: React.Dispatch<React.SetStateAction<IContactFieldsStatus>>;
    setContactFormData: React.Dispatch<React.SetStateAction<IContactFormData>>;
    setContactFormError: React.Dispatch<React.SetStateAction<IFormError>>;
    setCredits: BooleanState;
    setMusic: BooleanState;
    setNavigationMobile: BooleanState;
    setPage: (page: Page) => void;
    setSetting: BooleanState;
    setSocial: BooleanState;
    setSounds: BooleanState;
    commits: ICommitLog[] | undefined;
    contactFieldsStatus: IContactFieldsStatus;
    contactFormData: IContactFormData;
    contactFormError: IFormError;
    isLarge: boolean;
    isLoadingGithub: boolean;
    isMedium: boolean;
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

export { BooleanState, IAppContext, ICommitLog, Page, SettingContext };
