import { scroll } from '../classes/Scroll';
import { BooleanState } from '../interfaces/interface';

const handleOpenModal = (setStatusModal: BooleanState | undefined): void => {
    const openModal = (): void => {
        if (setStatusModal) {
            setStatusModal(true);
        }

        scroll.off();
        window.removeEventListener('scrollend', openModal);
    };

    if (window.scrollY !== 0) {
        window.addEventListener('scrollend', openModal);
        scroll.moveTop();
        return;
    }

    openModal();
};

export default handleOpenModal;
