import scroll from '../classes/Scroll';
import openModalAudio from '../assets/audio/open-modal.mp3';
import { BooleanState } from '../interfaces/interface';

const handleOpenModal = (setStatusModal: BooleanState | undefined): void => {
    const openAudio = new Audio(openModalAudio);

    const openModal = (): void => {
        if (setStatusModal) {
            setStatusModal(true);
            openAudio.play();
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
