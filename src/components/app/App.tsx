import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import useGithubApi from '../../hooks/useGithubApi';
import useLocalStorage from '../../hooks/useLocalStorage';
import useMusic from '../../hooks/useMusic';

import clickSoundEffect from '../../assets/audio/click.ogg';
import handleInitSettings from '../../utils/handleInitSettings';
import handleWrapperClassName from '../../utils/handleWrapperClassName';
import openModalSoundEffect from '../../assets/audio/open-modal.mp3';

import DesktopLayout from '../DesktopLayout/DesktopLayout';
import ModalAvailability from '../modalAvailability/ModalAvailability';
import ModalChallenge from '../modalChallenge/ModalChallenge';
import ModalCreations from '../modalCreations/ModalCreations';
import ModalCredits from '../modalCredits/ModalCredits';
import ModalSetting from '../modalSetting/ModalSetting';
import ModalSocial from '../modalSocial/ModalSocial';

import About from '../about/About';
import Achievements from '../achievements/Achievements';
import Beginning from '../beginning/Beginning';
import Creations from '../creations/Creations';
import Games from '../games/Games';
import GameSnake from '../gameSnake/GameSnake';
import Logs from '../logs/Logs';
import NavigationMobile from '../navigationMobile/NavigationMobile';
import Welcome from '../welcome/Welocme';

import mainTheme from '../../assets/audio/main-theme.mp3';
import { IAppContext, Page } from '../../interfaces/interface';
import styles from './App.module.scss';

const ContextApp = React.createContext<IAppContext | undefined>(undefined);
const TRANSITION_TIME: number = 1500;

const App = (): React.JSX.Element => {
    const isMedium: boolean = useMediaQuery({ maxWidth: 768 });
    const isLarge: boolean = useMediaQuery({ maxWidth: 1200 });

    const [commits, isLoadingGithub, errorGithub] = useGithubApi();
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

    const clickSound = new Audio(clickSoundEffect);
    const openModalSound = new Audio(openModalSoundEffect);

    const handleSoundClick = () => (sounds ? clickSound.play() : null);
    const handleSoundOpenModal = () => (sounds ? openModalSound.play() : null);

    changeStateMusic(music);
    handleInitSettings();

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
                    setProjectImages,
                    setSetting,
                    setSocial,
                    setSounds,
                    changeStateMusic,
                    handleSoundClick,
                    handleSoundOpenModal,
                    commits,
                    creations,
                    errorGithub,
                    isLarge,
                    isLoadingGithub,
                    isMedium,
                    modalProject,
                    music,
                    navigationMobile,
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
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/" element={<DesktopLayout />}>
                            <Route path="about" element={<About />} />
                            <Route path="beginning" element={<Beginning />} />
                            <Route path="logs" element={<Logs />} />
                            <Route path="achievements" element={<Achievements />} />
                            <Route path="creations" element={<Creations />} />
                            <Route path="games/*" element={<Games />}>
                                <Route path="snake" element={<GameSnake />} />
                            </Route>
                        </Route>
                    </Routes>
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
