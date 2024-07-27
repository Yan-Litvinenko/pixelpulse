import React from 'react';

import { useLocation } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';
import useLocalStorage from '../../hooks/useLocalStorage';

import { handleInitSettings } from '../../utils/handleSettings';
import handleWrapperClassName from '../../utils/handleWrapperClassName';

import { Layout } from '../layout/Layout';
import { ModalAvailability } from '../modalAvailability/ModalAvailability';
import { ModalChallenge } from '../modalChallenge/ModalChallenge';
import { ModalCreations } from '../modalCreations/ModalCreations';
import { ModalCredits } from '../modalCredits/ModalCredits';
import { ModalSetting } from '../modalSetting/ModalSetting';
import { ModalSocial } from '../modalSocial/ModalSocial';

import { NavigationMobile } from '../navigationMobile/NavigationMobile';

import mainTheme from '../../assets/audio/main-theme.mp3';

import clickSoundEffect from '../../assets/audio/click.ogg';
import { useModal } from '../../hooks/useModal';
import { IContextApp } from '../../interfaces/interface';
import { IUseHeaderStatistic, useHeaderStatistic } from '../../hooks/useHeaderStatistics';
import { IUseAchievements, useAchievements } from '../../hooks/useAchievements';
import styles from './App.module.scss';

const ContextApp = React.createContext<IContextApp | null>(null);
const TRANSITION_TIME: number = 1500;

const App = (): React.JSX.Element => {
    const isMedium: boolean = useMediaQuery({ maxWidth: 768 });
    const isLarge: boolean = useMediaQuery({ maxWidth: 1200 });

    const location = useLocation();

    const headerStatistic: IUseHeaderStatistic = useHeaderStatistic();
    const achievements: IUseAchievements = useAchievements(headerStatistic.level);

    const [music, setMusic] = useLocalStorage<boolean>(true, 'music');
    const [sounds, setSounds] = useLocalStorage<boolean>(true, 'sounds');

    const availability = useModal(sounds);
    const challenge = useModal(sounds);
    const creations = useModal(sounds);
    const credits = useModal(sounds);
    const navigationMobile = useModal(sounds);
    const setting = useModal(sounds);
    const social = useModal(sounds);

    const [projectImages, setProjectImages] = React.useState<string[]>([]);
    const [targetProject, setTargetProject] = React.useState<number>(0);
    const [targetImage, setTargetImage] = React.useState<number>(0);

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
                setTargetProject,
                setTargetImage,
                setMusic,
                setProjectImages,
                setSounds,
                availability,
                challenge,
                credits,
                setting,
                social,
                achievements,
                headerStatistic,
                creations,
                isLarge,
                isMedium,
                mainMusic,
                targetImage,
                targetProject,
                music,
                navigationMobile,
                projectImages,
                sounds,
                styles,
            }}
        >
            <div
                className={handleWrapperClassName({
                    effectsLeft: [
                        social.statusModal,
                        availability.statusModal,
                        credits.statusModal,
                        challenge.statusModal,
                    ],
                    effectsCenter: [setting.statusModal, creations.statusModal],
                    isMedium: isMedium,
                    isLarge: isLarge,
                    stylesWrapper: styles,
                })}
            >
                <Layout />
            </div>

            {availability.statusModal ? <ModalAvailability /> : null}
            {challenge.statusModal ? <ModalChallenge /> : null}
            {creations.statusModal ? <ModalCreations /> : null}
            {credits.statusModal ? <ModalCredits /> : null}
            {navigationMobile.statusModal && (isMedium || isLarge) ? <NavigationMobile /> : null}
            {setting.statusModal ? <ModalSetting /> : null}
            {social.statusModal ? <ModalSocial /> : null}
        </ContextApp.Provider>
    );
};

export { App, ContextApp };
