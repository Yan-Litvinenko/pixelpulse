import React from 'react';
import setValueToLocalStorage from '@/helpers/setValueToLocalStorage';
import useFirstInteraction from './useFirstInteraction';
import { soundsSelector } from '@/redux/selectors';
import { useSelector } from 'react-redux';

export default function useSounds(): void {
    const firstInteraction: boolean = useFirstInteraction();
    const sounds = useSelector(soundsSelector);

    const { soundsState } = sounds;
    const { linkGlitchEffect, linkSoundClick, linkSoundModal } = sounds;
    const { stateClickTrigger, stateGlitchTrigger, stateModalTrigger } = sounds;

    const clickEffect = React.useRef<null | HTMLAudioElement>(null);
    const modalEffect = React.useRef<null | HTMLAudioElement>(null);
    const glitchEffect = React.useRef<null | HTMLAudioElement>(null);

    React.useEffect(() => {
        clickEffect.current = new Audio(linkSoundClick);
        modalEffect.current = new Audio(linkSoundModal);
        glitchEffect.current = new Audio(linkGlitchEffect);

        glitchEffect.current.volume = 0.1;
    }, []);

    React.useEffect(() => {
        setValueToLocalStorage('pixelpulse-sounds-state', soundsState);
    }, [soundsState]);

    React.useEffect(() => {
        if (clickEffect.current) {
            if (firstInteraction && soundsState) {
                clickEffect.current.play();
            }
        }
    }, [stateClickTrigger]);

    React.useEffect(() => {
        if (modalEffect.current) {
            if (firstInteraction && soundsState) {
                modalEffect.current.play();
            }
        }
    }, [stateModalTrigger]);

    React.useEffect(() => {
        if (glitchEffect.current) {
            if (firstInteraction && soundsState) {
                glitchEffect.current.play();
            }
        }
    }, [stateGlitchTrigger]);
}
