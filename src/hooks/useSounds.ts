import React from 'react';
import { setValueToLocalStorage } from '../utils/setValueToLocalStorage';
import { soundsSelector } from '../store/selectors';
import { useFirstInteraction } from './useFirstInteraction';
import { useSelector } from 'react-redux';

const useSounds = (): void => {
    const firstInteraction: boolean = useFirstInteraction();
    const sounds = useSelector(soundsSelector);
    const { soundsState } = sounds;
    const { linkGlitchEffect, linkSoundClick, linkSoundModal } = sounds;
    const { stateClickTrigger, stateGlitchTrigger, stateModalTrigger } = sounds;

    const clickEffect: HTMLAudioElement = new Audio(linkSoundClick);
    const modalEffect: HTMLAudioElement = new Audio(linkSoundModal);
    const glitchEffect: HTMLAudioElement = new Audio(linkGlitchEffect);

    glitchEffect.volume = 0.1;

    React.useEffect(() => {
        setValueToLocalStorage('pixelpulse-sounds-state', soundsState);
    }, [soundsState]);

    React.useEffect(() => {
        if (firstInteraction && soundsState) clickEffect.play();
    }, [stateClickTrigger]);

    React.useEffect(() => {
        if (firstInteraction && soundsState) modalEffect.play();
    }, [stateModalTrigger]);

    React.useEffect(() => {
        if (firstInteraction && soundsState) glitchEffect.play();
    }, [stateGlitchTrigger]);
};

export { useSounds };
