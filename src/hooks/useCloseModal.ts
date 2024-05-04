import React from 'react';
import scroll from '../utils/scroll';
import { BooleanState } from '../interfaces/interface';

const useCloseModal = (
    place: React.MutableRefObject<HTMLDivElement | null>,
    setModalStatus: BooleanState | BooleanState[],
    transitionTime: number,
) => {
    React.useEffect(() => {
        const handleCloseModal = (event: MouseEvent): void => {
            if (event.target === place.current) {
                if (Array.isArray(setModalStatus)) {
                    setModalStatus.forEach((status) => status(false));
                } else {
                    setModalStatus(false);
                }
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
