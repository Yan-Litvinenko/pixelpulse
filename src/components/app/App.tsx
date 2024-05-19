import React from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';
import useGithubApi from '../../hooks/useGithubApi';
import useLocalStorage from '../../hooks/useLocalStorage';

import clickSoundEffect from '../../assets/audio/click.ogg';
import { handleInitSettings } from '../../utils/handleSettings';
import handleWrapperClassName from '../../utils/handleWrapperClassName';
import ModalSoundEffect from '../../assets/audio/modal.mp3';

import Layout from '../layout/Layout';
import ModalAvailability from '../modalAvailability/ModalAvailability';
import ModalChallenge from '../modalChallenge/ModalChallenge';
import ModalCreations from '../modalCreations/ModalCreations';
import ModalCredits from '../modalCredits/ModalCredits';
import ModalSetting from '../modalSetting/ModalSetting';
import ModalSocial from '../modalSocial/ModalSocial';

import { Triangle } from 'react-loader-spinner';
import About from '../about/About';
import Achievements from '../achievements/Achievements';
import Beginning from '../beginning/Beginning';
import Creations from '../creations/Creations';
import Error from '../error/Error';
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

    const location = useLocation();

    const [loading, setLoading] = React.useState(true);
    const [commits, isLoadingGithub, errorGithub] = useGithubApi();
    const [availability, setAvailability] = React.useState<boolean>(false);
    const [credits, setCredits] = React.useState<boolean>(false);
    const [setting, setSetting] = React.useState<boolean>(false);
    const [social, setSocial] = React.useState<boolean>(false);
    const [challenge, setChallenge] = React.useState<boolean>(false);
    const [creations, setCreations] = React.useState<boolean>(false);
    const [sounds, setSounds] = useLocalStorage(true, 'sounds');
    const [music, setMusic] = useLocalStorage(true, 'music');
    const [navigationMobile, setNavigationMobile] = React.useState<boolean>(false);
    const [projectImages, setProjectImages] = React.useState<string[]>([]);
    const [modalProject, setModalProject] = React.useState<number>(0);

    const mainMusic = useAudioPlayer(music);
    const clickSound: HTMLAudioElement = new Audio(clickSoundEffect);
    const modalSound: HTMLAudioElement = new Audio(ModalSoundEffect);

    const handleSoundClick = () => (sounds ? clickSound.play() : null);
    const handleSoundModal = () => (sounds ? modalSound.play() : null);

    handleInitSettings();

    React.useEffect(() => {
        mainMusic.selectTrack(mainTheme);
        setLoading(false);

        return () => setLoading(true);
    }, [location]);

    return (
        <ContextApp.Provider
            value={{
                TRANSITION_TIME,
                setAvailability,
                setChallenge,
                setCreations,
                setCredits,
                setModalProject,
                setMusic: setMusic,
                setNavigationMobile,
                setProjectImages,
                setSetting,
                setSocial,
                setSounds,
                handleSoundClick,
                handleSoundModal,
                commits,
                creations,
                errorGithub,
                isLarge,
                isLoadingGithub,
                isMedium,
                mainMusic,
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
                {loading ? (
                    <Triangle
                        ariaLabel="triangle-loading"
                        color=""
                        height="120"
                        visible={true}
                        width="120"
                        wrapperClass={styles.loader}
                        wrapperStyle={{}}
                    />
                ) : null}
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/" element={<Layout />}>
                        <Route path="about" element={<About />} />
                        <Route path="beginning" element={<Beginning />} />
                        <Route path="logs" element={<Logs />} />
                        <Route path="achievements" element={<Achievements />} />
                        <Route path="creations" element={<Creations />} />
                        <Route path="games/*" element={<Games />}>
                            <Route path="snake" element={<GameSnake />} />
                        </Route>
                        <Route path="error" element={<Error />} />
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
    );
};

export { App, ContextApp, Page };
