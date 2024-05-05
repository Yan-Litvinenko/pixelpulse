import React from 'react';
import { ContextApp } from '../components/app/App';
import scroll from '../utils/scroll';
import { BooleanState, IAppContext } from '../interfaces/interface';

const useCloseButtonModal = (
    button: React.MutableRefObject<HTMLButtonElement | null>,
    setModalStatus: BooleanState,
): void => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    const handleCloseModal = (): void => {
        if (contextApp) {
            setModalStatus(false);
            scroll.on();
        }
    };

    React.useEffect(() => {
        if (contextApp?.isLarge || contextApp?.isMedium) {
            button.current?.addEventListener('click', handleCloseModal);
        } else {
            setTimeout(() => {
                button.current?.addEventListener('click', handleCloseModal);
            }, contextApp?.TRANSITION_TIME);
        }

        return () => {
            button.current?.removeEventListener('click', handleCloseModal);
        };
    });
};

export default useCloseButtonModal;
