import React from 'react';
import { musicSelector } from '../store/selectors';
import { setValueToLocalStorage } from '../utils/setValueToLocalStorage';
import { useFirstInteraction } from './useFirstInteraction';
import { useSelector } from 'react-redux';

const useMusic = (): void => {
    const { musicState, linkActiveMusicTheme } = useSelector(musicSelector);
    const music = React.useRef<HTMLAudioElement>(new Audio(linkActiveMusicTheme));
    const firstInteraction: boolean = useFirstInteraction();

    music.current.volume = 0.4;

    const setMusic = (newMusic: string): string => (music.current.src = newMusic);
    const repeat = (): Promise<void> | null => (musicState && firstInteraction ? music.current.play() : null);

    React.useEffect(() => {
        if (firstInteraction && musicState) {
            music.current.play();
        } else {
            music.current.pause();
        }

        setValueToLocalStorage('pixelpulse-music-state', musicState);
        music.current.addEventListener('ended', repeat);
        return () => music.current.removeEventListener('ended', repeat);
    }, [musicState, firstInteraction]);

    React.useEffect(() => {
        setMusic(linkActiveMusicTheme);

        if (firstInteraction && musicState) music.current.play();
    }, [linkActiveMusicTheme]);
};

export { useMusic };
