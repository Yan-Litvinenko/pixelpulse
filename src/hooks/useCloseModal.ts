import React from 'react';
import { ContextApp } from '../components/app/App';
import scroll from '../classes/Scroll';
import { BooleanState, IAppContext } from '../interfaces/interface';

const useCloseModal = (
    place: React.MutableRefObject<HTMLDivElement | null>,
    setModalStatus: BooleanState,
    success: boolean,
    loading: boolean,
    error: boolean,
): (() => void) => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    const [mainModal, setMainModal] = React.useState(false);

    const handleClose = (): void => {
        contextApp?.handleSoundModal();
        setModalStatus(false);
        scroll.on();
    };

    const handleKeydownEscape = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            handleClose();
        }
    };

    const handleClickOnTheWindow = (event: MouseEvent): void => {
        if (event.target === place.current) {
            handleClose();
        }
    };

    const addEventListener = (): void => {
        window.addEventListener('keydown', handleKeydownEscape);
        place.current?.addEventListener('mousedown', handleClickOnTheWindow);
    };
    const removeEventListener = (): void => {
        place.current?.removeEventListener('mousedown', handleClickOnTheWindow);
        window.removeEventListener('keydown', handleKeydownEscape);
    };

    React.useEffect(() => {
        if (contextApp?.isLarge || contextApp?.isMedium) {
            window.addEventListener('keydown', handleKeydownEscape);
        } else {
            if (!mainModal) {
                setTimeout(() => {
                    addEventListener();
                    setMainModal(true);
                }, contextApp?.TRANSITION_TIME);
            } else if ((success && mainModal) || (error && mainModal) || (loading && mainModal)) {
                removeEventListener();
            } else if ((mainModal && !success) || (mainModal && !error) || (mainModal && !loading)) {
                addEventListener();
            }
        }

        return () => {
            removeEventListener();
        };
    }, [success, error, loading]);

    return handleClose;
};

export default useCloseModal;
