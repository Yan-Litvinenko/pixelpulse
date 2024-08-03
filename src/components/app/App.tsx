import React from 'react';
import { IContextApp } from '../../interfaces/interface';
import { IUseAchievements, useAchievements } from '../../hooks/useAchievements';
import { IUseHeaderStatistic, useHeaderStatistic } from '../../hooks/useHeaderStatistics';
import { Layout } from '../layout/Layout';
import { ModalAvailability } from '../modalAvailability/ModalAvailability';
import { ModalChallenge } from '../modalChallenge/ModalChallenge';
import { ModalCreations } from '../modalCreations/ModalCreations';
import { ModalCredits } from '../modalCredits/ModalCredits';
import { ModalSetting } from '../modalSetting/ModalSetting';
import { ModalSocial } from '../modalSocial/ModalSocial';
import { NavigationMobile } from '../navigationMobile/NavigationMobile';
import { settings } from '../../classes/Settings';
import { Store } from '../../store/store';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useModal } from '../../hooks/useModal';
import { useMedia } from '../../hooks/useMedia';
import { useSelector } from 'react-redux';
import { wrapperClassName } from '../../utils/wrapperClassName';
import ErrorBoundary from '../../hoc/ErrorBoundary';
import clickSoundEffect from '../../assets/audio/click.ogg';
import mainTheme from '../../assets/audio/main-theme.mp3';
import styles from './App.module.scss';

const ContextApp = React.createContext<IContextApp | null>(null);
const TRANSITION_TIME: number = 1500;
const clickSound: HTMLAudioElement = new Audio(clickSoundEffect);

const App = (): React.JSX.Element => {
    const { isSmall, isMedium } = useSelector((state: Store) => state.mediaQuery);
    useMedia();

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
    const handleSoundClick = (): Promise<void> | null => (sounds ? clickSound.play() : null);

    settings.init();

    React.useEffect(() => mainMusic.selectTrack(mainTheme), []);

    return (
        <ErrorBoundary>
            <ContextApp.Provider
                value={{
                    TRANSITION_TIME,
                    handleSoundClick,
                    setMusic,
                    setProjectImages,
                    setSounds,
                    setTargetImage,
                    setTargetProject,
                    achievements,
                    availability,
                    challenge,
                    creations,
                    credits,
                    headerStatistic,
                    mainMusic,
                    music,
                    navigationMobile,
                    projectImages,
                    setting,
                    social,
                    sounds,
                    targetImage,
                    targetProject,
                    styles,
                }}
            >
                <div
                    className={wrapperClassName({
                        social: social.statusModal,
                        availability: availability.statusModal,
                        credits: credits.statusModal,
                        challenge: challenge.statusModal,
                        setting: setting.statusModal,
                        creations: creations.statusModal,
                        styles,
                    })}
                >
                    <Layout />
                </div>

                {availability.statusModal ? <ModalAvailability /> : null}
                {challenge.statusModal ? <ModalChallenge /> : null}
                {creations.statusModal ? <ModalCreations /> : null}
                {credits.statusModal ? <ModalCredits /> : null}
                {navigationMobile.statusModal && (isMedium || isSmall) ? <NavigationMobile /> : null}
                {setting.statusModal ? <ModalSetting /> : null}
                {social.statusModal ? <ModalSocial /> : null}
            </ContextApp.Provider>
        </ErrorBoundary>
    );
};

export { App, ContextApp };
