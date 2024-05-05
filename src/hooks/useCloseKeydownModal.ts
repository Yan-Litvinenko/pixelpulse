import React from 'react';
import { IAppContext } from '../interfaces/interface';
import { ContextApp } from '../components/app/App';
import scroll from '../utils/scroll';
import { BooleanState } from '../interfaces/interface';

const useCloseKeydownModal = (setModalStatus: BooleanState): ((event: KeyboardEvent) => void) => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    const handleEscapeKey = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            setModalStatus(false);
            scroll.on();
        }
    };

    React.useEffect(() => {
        if (contextApp?.isLarge || contextApp?.isMedium) {
            window.addEventListener('keydown', handleEscapeKey);
        } else {
            setTimeout(() => {
                window.addEventListener('keydown', handleEscapeKey);
            }, contextApp?.TRANSITION_TIME);
        }

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
        };
    });

    return handleEscapeKey;
};

export default useCloseKeydownModal;
