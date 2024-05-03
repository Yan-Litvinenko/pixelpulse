import React from 'react';
import { ContextApp } from '../components/app/App';
import scroll from '../utils/scroll';
import { BooleanState, IAppContext, IContactFieldsStatus } from '../interfaces/interface';

const useCloseButtonModal = (
    button: React.MutableRefObject<HTMLButtonElement | null>,
    setModalStatus: BooleanState,
): void => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    const handleCloseModal = (): void => {
        if (contextApp) {
            contextApp?.setContactFormData({ name: '', email: '', message: '' });
            contextApp.setContactFieldsStatus((prev) => {
                const updatedStatus: IContactFieldsStatus = { ...prev };

                Object.keys(updatedStatus).forEach((key) => {
                    updatedStatus[key] = true;
                });

                return updatedStatus;
            });

            contextApp.setContactFormError((prev) => {
                const updatedStatus = { ...prev };

                Object.keys(updatedStatus).forEach((key) => {
                    updatedStatus[key] = '';
                });

                return updatedStatus;
            });

            setModalStatus(false);
            scroll.on();
        }
    };

    const handleEscapeKey = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') handleCloseModal();
    };

    React.useEffect(() => {
        if (contextApp?.isLarge || contextApp?.isMedium) {
            window.addEventListener('keydown', handleEscapeKey);
            button.current?.addEventListener('click', handleCloseModal);
        } else {
            setTimeout(() => {
                window.addEventListener('keydown', handleEscapeKey);
                button.current?.addEventListener('click', handleCloseModal);
            }, contextApp?.TRANSITION_TIME);
        }

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
            button.current?.removeEventListener('click', handleCloseModal);
        };
    });
};

export default useCloseButtonModal;
