import React from 'react';
import clickSoundEffect from '../../assets/audio/click.ogg';
import mainTheme from '../../assets/audio/main-theme.mp3';
import styles from './App.module.scss';
import { ErrorBoundary } from '../../hoc/ErrorBoundary';
import { useAchievements } from '../../hooks/useAchievements';
import { useHeaderStatistic } from '../../hooks/useHeaderStatistics';
import { Layout } from '../layout/Layout';
import { ModalAvailability } from '../modalAvailability/ModalAvailability';
import { ModalChallenge } from '../modalChallenge/ModalChallenge';
import { ModalCreations } from '../modalCreations/ModalCreations';
import { ModalCredits } from '../modalCredits/ModalCredits';
import { ModalSetting } from '../modalSetting/ModalSetting';
import { ModalSocial } from '../modalSocial/ModalSocial';
import { NavigationMobile } from '../navigationMobile/NavigationMobile';
import { settingsColor } from '../../classes/SettingsColor';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useMedia } from '../../hooks/useMedia';
import { useModalCloseByKey } from '../../hooks/useModalCloseByKey';
import { useSelector } from 'react-redux';
import { wrapperClassName } from '../../utils/wrapperClassName';
import type { IContextApp } from '../../interfaces/interface';
import type { IUseAchievements } from '../../hooks/useAchievements';
import type { IUseHeaderStatistic } from '../../hooks/useHeaderStatistics';
import type { RootState } from '../../store/store';

const ContextApp = React.createContext<IContextApp | null>(null);
const clickSound: HTMLAudioElement = new Audio(clickSoundEffect);

const App = (): React.JSX.Element => {
    const { isSmall, isMedium } = useSelector((state: RootState) => state.mediaQuery);
    const { availability, settings, social, challenge, creations, credits, navigationMobile } = useSelector(
        (state: RootState) => state.modal.stateModal,
    );

    const headerStatistic: IUseHeaderStatistic = useHeaderStatistic();
    const achievements: IUseAchievements = useAchievements(headerStatistic.level);

    const [music, setMusic] = useLocalStorage<boolean>(true, 'music');
    const [sounds, setSounds] = useLocalStorage<boolean>(true, 'sounds');

    const [projectImages, setProjectImages] = React.useState<string[]>([]);
    const [targetProject, setTargetProject] = React.useState<number>(0);
    const [targetImage, setTargetImage] = React.useState<number>(0);

    const mainMusic = useAudioPlayer(music);

    const handleSoundClick = (): Promise<void> | null => (sounds ? clickSound.play() : null);

    settingsColor.init();

    useMedia();
    useModalCloseByKey();

    React.useEffect(() => mainMusic.selectTrack(mainTheme), []);

    return (
        <ErrorBoundary>
            <ContextApp.Provider
                value={{
                    handleSoundClick,
                    setMusic,
                    setProjectImages,
                    setSounds,
                    setTargetImage,
                    setTargetProject,
                    achievements,
                    headerStatistic,
                    mainMusic,
                    music,
                    projectImages,
                    sounds,
                    targetImage,
                    targetProject,
                    styles,
                }}
            >
                <div className={wrapperClassName(styles)}>
                    <Layout />
                </div>

                {availability ? <ModalAvailability /> : null}
                {challenge ? <ModalChallenge /> : null}
                {creations ? <ModalCreations /> : null}
                {credits ? <ModalCredits /> : null}
                {navigationMobile && (isMedium || isSmall) ? <NavigationMobile /> : null}
                {settings ? <ModalSetting /> : null}
                {social ? <ModalSocial /> : null}
            </ContextApp.Provider>
        </ErrorBoundary>
    );
};

export { App, ContextApp };
