import React from 'react';
import { scroll } from '../classes/Scroll';
import { useAppContext } from './useAppContext';
import soundEffect from '../assets/audio/modal.mp3';

type Modal = 'credits' | 'creations' | 'availability' | 'social' | 'setting' | 'challenge' | 'navigationMobile';
interface IUseModal {
    openModal: () => void;
}

const modalSound: HTMLAudioElement = new Audio(soundEffect);

const useModal = (modal: Modal): IUseModal => {
    const {
        sounds,
        setCredits,
        setAvailability,
        setSocial,
        setSetting,
        setChallenge,
        setNavigationMobile,
        setCreations,
    } = useAppContext();

    const controlStateModal: Record<Modal, React.Dispatch<React.SetStateAction<boolean>>> = {
        credits: setCredits,
        availability: setAvailability,
        social: setSocial,
        setting: setSetting,
        challenge: setChallenge,
        navigationMobile: setNavigationMobile,
        creations: setCreations,
    };

    const mutableStateModal: React.Dispatch<React.SetStateAction<boolean>> = controlStateModal[modal];

    const openSoundEffect = () => {
        if (sounds) modalSound.play();
    };

    const openModal = (): void => {
        mutableStateModal(true);
        openSoundEffect();

        if (window.scrollY !== 0) {
            window.addEventListener('scrollend', openModal);
            scroll.moveTop();
            return;
        }

        scroll.off();
        window.removeEventListener('scrollend', openModal);
    };

    return {
        openModal,
    };
};

export { useModal };
