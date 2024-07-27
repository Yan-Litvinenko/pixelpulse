import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { scroll } from '../classes/Scroll';
import soundEffect from '../assets/audio/modal.mp3';

interface IUseModal {
    statusModal: boolean;
    openModal: () => void;
    closeModal: () => void;
    stopPropagation: <T>(event: React.MouseEvent<T>) => void;
    setStatusForm: (value: boolean) => void;
}

const modalSound: HTMLAudioElement = new Audio(soundEffect);

const openSoundEffect = (soundsStatus: boolean): Promise<void> | undefined =>
    soundsStatus ? modalSound.play() : undefined;
const closeSoundEffect = (soundsStatus: boolean): Promise<void> | undefined =>
    soundsStatus ? modalSound.play() : undefined;

const useModal = (soundsStatus: boolean): IUseModal => {
    const isLarge: boolean = useMediaQuery({ maxWidth: 1200 });
    const [statusModal, setStatusModal] = React.useState<boolean>(false);
    const [delay, setDelay] = React.useState<boolean>(false);
    const statusForm = React.useRef<boolean>(false);

    const closeModal = (): void => {
        if ((!delay && !isLarge) || statusForm.current) return;

        window.removeEventListener('keydown', closeModalByKey);
        closeSoundEffect(soundsStatus);
        setStatusModal(false);
        setDelay(false);
        scroll.on();
    };

    function closeModalByKey(event: KeyboardEvent): void {
        if (event.key === 'Escape') closeModal();
    }

    React.useEffect(() => {
        if (statusModal && !isLarge) window.addEventListener('keydown', closeModalByKey);
    }, [delay, statusModal]);

    const openModal = (): void => {
        const openHandler = (): void => {
            window.removeEventListener('scrollend', openHandler);
            setTimeout(() => setDelay(() => true), 1500);
            openSoundEffect(soundsStatus);
            setStatusModal(true);
            scroll.off();
        };

        if (window.scrollY !== 0) {
            window.addEventListener('scrollend', openHandler);
            scroll.moveTop();
            return;
        }

        openHandler();
    };

    const stopPropagation = <T>(event: React.MouseEvent<T>) => event.stopPropagation();
    const setStatusForm = (value: boolean): void => {
        statusForm.current = value;
    };

    return {
        statusModal,
        openModal,
        closeModal,
        stopPropagation,
        setStatusForm,
    };
};

export { useModal, IUseModal };
