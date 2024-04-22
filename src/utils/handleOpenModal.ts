import scroll from './scroll';
import { BooleanState } from '../interfaces/interfaces';

const handleOpenModal = (setStatusModal: BooleanState | undefined, isMobile: boolean): void => {
    const openModal = (): void => {
        if (setStatusModal) {
            setStatusModal(true);
        }

        scroll.off();
        window.removeEventListener('scrollend', openModal);
    };

    if (!isMobile) {
        if (window.scrollY !== 0) {
            window.addEventListener('scrollend', openModal);
            scroll.moveTop();
            return;
        }
    }
    openModal();
};

export default handleOpenModal;
