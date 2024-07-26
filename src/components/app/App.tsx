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

import NavigationMobile from '../navigationMobile/NavigationMobile';

import mainTheme from '../../assets/audio/main-theme.mp3';

import clickSoundEffect from '../../assets/audio/click.ogg';
import { IContextApp } from '../../interfaces/interface';
import styles from './App.module.scss';
import { IUseHeaderStatistic, useHeaderStatistic } from '../../hooks/useHeaderStatistics';
import { IUseAchievements, useAchievements } from '../../hooks/useAchievements';

const ContextApp = React.createContext<IContextApp | null>(null);
const TRANSITION_TIME: number = 1500;

const App = (): React.JSX.Element => {
    const isMedium: boolean = useMediaQuery({ maxWidth: 768 });
    const isLarge: boolean = useMediaQuery({ maxWidth: 1200 });

    const location = useLocation();

    const headerStatistic: IUseHeaderStatistic = useHeaderStatistic();
    const achievements: IUseAchievements = useAchievements(headerStatistic.level);

    const [availability, setAvailability] = React.useState<boolean>(false);
    const [challenge, setChallenge] = React.useState<boolean>(false);
    const [creations, setCreations] = React.useState<boolean>(false);
    const [credits, setCredits] = React.useState<boolean>(false);
    const [navigationMobile, setNavigationMobile] = React.useState<boolean>(false);
    const [setting, setSetting] = React.useState<boolean>(false);
    const [social, setSocial] = React.useState<boolean>(false);

    const [projectImages, setProjectImages] = React.useState<string[]>([]);
    const [modalProject, setModalProject] = React.useState<number>(0);
    const [modalProjectImage, setModalProjectImage] = React.useState<number>(0);

    const [music, setMusic] = useLocalStorage<boolean>(true, 'music');
    const [sounds, setSounds] = useLocalStorage<boolean>(true, 'sounds');
    const mainMusic = useAudioPlayer(music);

    const clickSound: HTMLAudioElement = new Audio(clickSoundEffect);

    const handleSoundClick = () => (sounds ? clickSound.play() : null);

    handleInitSettings();

    React.useEffect(() => {
        mainMusic.selectTrack(mainTheme);
    }, [location]);

    return (
        <ContextApp.Provider
            value={{
                TRANSITION_TIME,
                handleSoundClick,
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
                achievements,
                headerStatistic,
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
