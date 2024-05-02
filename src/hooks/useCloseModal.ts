import React from 'react';
import scroll from '../utils/scroll';
import { ContextApp } from '../components/app/App';
import { BooleanState } from '../interfaces/interface';

const useCloseModal = (
    place: React.MutableRefObject<HTMLDivElement | null>,
    setStatus: BooleanState | BooleanState[],
    transitionTime: number,
) => {
    const contexApp = React.useContext(ContextApp);

    React.useEffect(() => {
        const handleCloseModal = (event: MouseEvent): void => {
            if (event.target === place.current) {
                if (Array.isArray(setStatus)) {
                    setStatus.forEach((status) => status(false));
                } else {
                    setStatus(false);
                }
                contexApp?.setContactFormData({ name: '', email: '', message: '' });
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
