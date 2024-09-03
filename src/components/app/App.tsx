import React from 'react';
import styles from './App.module.scss';
import { ErrorBoundary } from '../../hoc/ErrorBoundary';
import { Layout } from '../layout/Layout';
import { mediaQuerySelector } from '../../store/selectors';
import { ModalAvailability } from '../modalAvailability/ModalAvailability';
import { ModalChallenge } from '../modalChallenge/ModalChallenge';
import { ModalCreations } from '../modalCreations/ModalCreations';
import { ModalCredits } from '../modalCredits/ModalCredits';
import { ModalSetting } from '../modalSetting/ModalSetting';
import { ModalSocial } from '../modalSocial/ModalSocial';
import { NavigationMobile } from '../navigationMobile/NavigationMobile';
import { settingsColor } from '../../classes/SettingsColor';
import { stateModalSelector } from '../../store/selectors';
import { useAchievements } from '../../hooks/useAchievements';
import { useApp } from '../../hooks/useApp';
import { useHeaderStatistic } from '../../hooks/useHeaderStatistics';
import { useMedia } from '../../hooks/useMedia';
import { useModalCloseByKey } from '../../hooks/useModalCloseByKey';
import { useMusic } from '../../hooks/useMusic';
import { useSelector } from 'react-redux';
import { useSounds } from '../../hooks/useSounds';
import { wrapperClassName } from '../../utils/wrapperClassName';

const App = (): React.JSX.Element => {
    const { isSmall, isMedium } = useSelector(mediaQuerySelector);
    const { availability, settings, social, challenge, creations, credits, navigationMobile } =
        useSelector(stateModalSelector);

    settingsColor.init();
    useApp(styles);
    useMusic();
    useMedia();
    useSounds();
    useAchievements();
    useModalCloseByKey();
    useHeaderStatistic();

    return (
        <ErrorBoundary>
            <div className={wrapperClassName()}>
                <Layout />
            </div>

            {availability ? <ModalAvailability /> : null}
            {challenge ? <ModalChallenge /> : null}
            {creations ? <ModalCreations /> : null}
            {credits ? <ModalCredits /> : null}
            {navigationMobile && (isMedium || isSmall) ? <NavigationMobile /> : null}
            {settings ? <ModalSetting /> : null}
            {social ? <ModalSocial /> : null}
        </ErrorBoundary>
    );
};

export { App };
