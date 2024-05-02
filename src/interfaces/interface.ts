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
    setContactFormData: React.Dispatch<React.SetStateAction<IContactFormData>>;
    setCredits: BooleanState;
    setMusic: BooleanState;
    setNavigationMobile: BooleanState;
    setPage: (page: Page) => void;
    setSetting: BooleanState;
    setSocial: BooleanState;
    setSounds: BooleanState;
    setFormError: React.Dispatch<React.SetStateAction<IFormError>>;
    commits: ICommitLog[] | undefined;
    contactFormData: IContactFormData;
    formError: IFormError;
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

interface IContactFormData {
    name: string;
    email: string;
    message: string;
}

interface IContactForm {
    contactFormData: IContactFormData;
    setContactFormData: React.Dispatch<React.SetStateAction<IContactFormData>>;
}

interface IFormError {
    [key: string]: string;
}

export { BooleanState, IAppContext, ICommitLog, IContactForm, IContactFormData, Page, SettingContext, IFormError };
