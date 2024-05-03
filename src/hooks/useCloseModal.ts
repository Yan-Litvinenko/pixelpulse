import React from 'react';
import scroll from '../utils/scroll';
import { ContextApp } from '../components/app/App';
import { BooleanState } from '../interfaces/interface';

const useCloseModal = (
    place: React.MutableRefObject<HTMLDivElement | null>,
    setModalStatus: BooleanState | BooleanState[],
    transitionTime: number,
) => {
    const contextApp = React.useContext(ContextApp);

    React.useEffect(() => {
        const handleCloseModal = (event: MouseEvent): void => {
            if (event.target === place.current) {
                if (Array.isArray(setModalStatus)) {
                    setModalStatus.forEach((status) => status(false));
                } else {
                    setModalStatus(false);
                }
                contextApp?.setContactFormData({ name: '', email: '', message: '' });
                scroll.on();
            }
        };

        setTimeout(() => {
            place.current?.addEventListener('click', handleCloseModal);
        }, transitionTime);

        return () => place.current?.removeEventListener('click', handleCloseModal);
    }, []);
};

export default useCloseModal;
