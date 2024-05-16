import React from 'react';
import { useMediaQuery } from 'react-responsive';
import handleWrapperClassName from '../../utils/handleWrapperClassName';
import useGithubApi from '../../hooks/useGithubApi';
import useLocalStorage from '../../hooks/useLocalStorage';
import usePage from '../../hooks/usePage';
import Layout from '../layout/Layout';
import ModalAvailability from '../modalAvailability/ModalAvailability';
import ModalChallenge from '../modalChallenge/ModalChallenge';
import ModalCreations from '../modalCreations/ModalCreations';
import ModalCredits from '../modalCredits/ModalCredits';
import ModalSetting from '../modalSetting/ModalSetting';
import ModalSocial from '../modalSocial/ModalSocial';
import NavigationMobile from '../navigationMobile/NavigationMobile';
import { IAppContext, Page } from '../../interfaces/interface';
import mainTheme from '../../assets/audio/main-theme.mp3';
import styles from './App.module.scss';
import useMusic from '../../hooks/useMusic';

const ContextApp = React.createContext<IAppContext | undefined>(undefined);
const TRANSITION_TIME: number = 1500;

const App = (): React.JSX.Element => {
    const isMedium: boolean = useMediaQuery({ maxWidth: 768 });
    const isLarge: boolean = useMediaQuery({ maxWidth: 1200 });

    const [commits, isLoadingGithub, errorGithub] = useGithubApi();
    const [PageComponent, page, setPage] = usePage('welcome');
    const [availability, setAvailability] = React.useState<boolean>(false);
    const [credits, setCredits] = React.useState<boolean>(false);
    const [setting, setSetting] = React.useState<boolean>(false);
    const [social, setSocial] = React.useState<boolean>(false);
    const [challenge, setChallenge] = React.useState<boolean>(false);
    const [creations, setCreations] = React.useState<boolean>(false);
    const [sounds, setSounds] = useLocalStorage(true, 'sounds');
    const [music, setMusic] = useLocalStorage(true, 'music');
    const [changeStateMusic] = useMusic(mainTheme);
    const [navigationMobile, setNavigationMobile] = React.useState<boolean>(false);
    const [projectImages, setProjectImages] = React.useState<string[]>([]);
    const [modalProject, setModalProject] = React.useState<number>(0);

    changeStateMusic(music);

    return (
        <>
            <ContextApp.Provider
                value={{
                    TRANSITION_TIME,
                    setAvailability,
                    setChallenge,
                    setCreations,
                    setCredits,
                    setModalProject,
                    setMusic,
                    setNavigationMobile,
                    setPage,
                    setProjectImages,
                    setSetting,
                    setSocial,
                    setSounds,
                    changeStateMusic,
                    commits,
                    creations,
                    errorGithub,
                    isLarge,
                    isLoadingGithub,
                    isMedium,
                    modalProject,
                    music,
                    navigationMobile,
                    page,
                    projectImages,
                    sounds,
                    styles,
                }}
            >
                <div
                    className={handleWrapperClassName({
                        effectsLeft: [social, availability, credits, challenge],
                        effectsCenter: [setting, creations],
                        isMedium: isMedium,
                        isLarge: isLarge,
                        stylesWrapper: styles,
                    })}
                >
                    <PageComponent />
                    <Layout />
                </div>

                {availability ? <ModalAvailability /> : null}
                {challenge ? <ModalChallenge /> : null}
                {creations ? <ModalCreations /> : null}
                {credits ? <ModalCredits /> : null}
                {navigationMobile && (isMedium || isLarge) ? <NavigationMobile /> : null}
                {setting ? <ModalSetting /> : null}
                {social ? <ModalSocial /> : null}
            </ContextApp.Provider>
        </>
    );
};

export { App, ContextApp, Page };
