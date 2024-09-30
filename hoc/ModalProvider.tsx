'use client';

import ModalAvailability from '@/components/modalAvailability/ModalAvailability';
import ModalSocial from '@/components/modalSocial/ModalSocial';
import ModalChallenge from '@/components/modalChallenge/ModalChallenge';
import ModalSetting from '@/components/modalSettings/ModalSettings';
import ModalCreations from '@/components/modalCreations/ModalCreations';
import ModalCredits from '@/components/modalCredits/ModalCredits';
import NavigationMobile from '@/components/modalNavigation/ModalNavigation';
import { stateModalSelector, mediaQuerySelector } from '@/redux/selectors';
import { useSelector } from 'react-redux';

export default function ModalProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const modals = useSelector(stateModalSelector);
    const { isMedium, isSmall } = useSelector(mediaQuerySelector);
    const { availability, social, challenge, settings, creations, credits, navigationMobile } = modals.stateModal;

    return (
        <>
            {children}
            {availability ? <ModalAvailability /> : null}
            {social ? <ModalSocial /> : null}
            {challenge ? <ModalChallenge /> : null}
            {settings ? <ModalSetting /> : null}
            {creations ? <ModalCreations /> : null}
            {credits ? <ModalCredits /> : null}
            {navigationMobile && (isMedium || isSmall) ? <NavigationMobile /> : null}
        </>
    );
}
