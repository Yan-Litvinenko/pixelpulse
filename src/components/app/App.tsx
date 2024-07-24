import React from 'react';

import { useLocation } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';
import useLocalStorage from '../../hooks/useLocalStorage';

import { handleInitSettings } from '../../utils/handleSettings';
import handleWrapperClassName from '../../utils/handleWrapperClassName';

import { Layout } from '../layout/Layout';
import ModalAvailability from '../modalAvailability/ModalAvailability';
import ModalChallenge from '../modalChallenge/ModalChallenge';
import ModalCreations from '../modalCreations/ModalCreations';
import ModalCredits from '../modalCredits/ModalCredits';
import ModalSetting from '../modalSetting/ModalSetting';
import ModalSocial from '../modalSocial/ModalSocial';

import { Triangle } from 'react-loader-spinner';
import NavigationMobile from '../navigationMobile/NavigationMobile';

import mainTheme from '../../assets/audio/main-theme.mp3';
import ModalSoundEffect from '../../assets/audio/modal.mp3';
import clickSoundEffect from '../../assets/audio/click.ogg';
import { IContextApp } from '../../interfaces/interface';
import styles from './App.module.scss';

const ContextApp = React.createContext<IContextApp | null>(null);
const TRANSITION_TIME: number = 1500;

const App = (): React.JSX.Element => {
    const isMedium: boolean = useMediaQuery({ maxWidth: 768 });
    const isLarge: boolean = useMediaQuery({ maxWidth: 1200 });

    const location = useLocation();

    const [availability, setAvailability] = React.useState<boolean>(false);
    const [challenge, setChallenge] = React.useState<boolean>(false);
    const [creations, setCreations] = React.useState<boolean>(false);
    const [credits, setCredits] = React.useState<boolean>(false);
    const [navigationMobile, setNavigationMobile] = React.useState<boolean>(false);
    const [setting, setSetting] = React.useState<boolean>(false);
    const [social, setSocial] = React.useState<boolean>(false);

    const [loading, setLoading] = React.useState<boolean>(true);

    const [projectImages, setProjectImages] = React.useState<string[]>([]);
    const [modalProject, setModalProject] = React.useState<number>(0);
    const [modalProjectImage, setModalProjectImage] = React.useState<number>(0);

    const [music, setMusic] = useLocalStorage<boolean>(true, 'music');
    const [sounds, setSounds] = useLocalStorage<boolean>(true, 'sounds');
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
                handleSoundClick,
                handleSoundModal,
                setAvailability,
                setChallenge,
                setCreations,
                setCredits,
                setModalProject,
                setModalProjectImage,
                setMusic,
                setNavigationMobile,
                setProjectImages,
                setSetting,
                setSocial,
                setSounds,
                creations,
                isLarge,
                isMedium,
                mainMusic,
                modalProject,
                modalProjectImage,
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
    );
};

export { App, ContextApp };
