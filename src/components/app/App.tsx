import React from 'react';
import { useMediaQuery } from 'react-responsive';
import useGithubApi from '../../hooks/useGithubApi';
import useLocalStorage from '../../hooks/useLocalStorage';
import usePage from '../../hooks/usePage';
import handleWrapperClassName from '../../utils/handleWrapperClassName';
import Layout from '../layout/Layout';
import ModalAvailability from '../modalAvailability/ModalAvailability';
import ModalChallenge from '../modalChallenge/ModalChallenge';
import ModalCredits from '../modalCredits/ModalCredits';
import ModalSetting from '../modalSetting/ModalSetting';
import ModalSocial from '../modalSocial/ModalSocial';
import NavigationMobile from '../navigationMobile/NavigationMobile';
import { IAppContext, Page } from '../../interfaces/interface';
import styles from './App.module.scss';
import useFormContact from '../../hooks/useFormContact';

const ContextApp = React.createContext<IAppContext | undefined>(undefined);
const TRANSITION_TIME: number = 1500;

const App = (): React.JSX.Element => {
    const isMedium: boolean = useMediaQuery({ maxWidth: 768 });
    const isLarge: boolean = useMediaQuery({ maxWidth: 1200 });

    const [commits, isLoadingGithub] = useGithubApi();
    const [PageComponent, page, setPage] = usePage('welcome');
    const [availability, setAvailability] = React.useState<boolean>(false);
    const [credits, setCredits] = React.useState<boolean>(false);
    const [setting, setSetting] = React.useState<boolean>(false);
    const [social, setSocial] = React.useState<boolean>(false);
    const [challenge, setChallenge] = React.useState<boolean>(false);
    const [sounds, setSounds] = useLocalStorage(true, 'sounds');
    const [music, setMusic] = useLocalStorage(true, 'music');
    const [navigationMobile, setNavigationMobile] = React.useState<boolean>(false);

    const [
        contactFieldsStatus,
        contactFormError,
        contactFormData,
        setContactFieldsStatus,
        setContactFormError,
        setContactFormData,
    ] = useFormContact();

    return (
        <>
            <ContextApp.Provider
                value={{
                    TRANSITION_TIME,
                    setAvailability,
                    setChallenge,
                    setContactFormData,
                    setContactFieldsStatus,
                    setCredits,
                    setContactFormError,
                    setMusic,
                    setNavigationMobile,
                    setPage,
                    setSetting,
                    setSocial,
                    setSounds,
                    commits,
                    contactFormData,
                    contactFormError,
                    contactFieldsStatus,
                    isLarge,
                    isLoadingGithub,
                    isMedium,
                    music,
                    navigationMobile,
                    page,
                    sounds,
                    styles,
                }}
            >
                <div
                    className={handleWrapperClassName({
                        effects: [social, availability, credits, challenge],
                        settingState: setting,
                        isMedium: isMedium,
                        isLarge: isLarge,
                        stylesWrapper: styles,
                    })}
                >
                    <PageComponent />
                    <Layout />
                </div>

                {availability ? <ModalAvailability /> : null}
                {social ? <ModalSocial /> : null}
                {credits ? <ModalCredits /> : null}
                {setting ? <ModalSetting /> : null}
                {challenge ? <ModalChallenge /> : null}
                {navigationMobile && (isMedium || isLarge) ? <NavigationMobile /> : null}
            </ContextApp.Provider>
        </>
    );
};

export { App, ContextApp, Page };
