import React from 'react';
import setValueToLocalStorage from '@/helpers/setValueToLocalStorage';
import useFirstInteraction from './useFirstInteraction';
import { musicSelector } from '@/redux/selectors';
import { useSelector } from 'react-redux';

export default function useMusic(): void {
    const { musicState, linkActiveMusicTheme } = useSelector(musicSelector);
    const music = React.useRef<HTMLAudioElement | null>(null);
    const firstInteraction: boolean = useFirstInteraction();

    React.useEffect(() => {
        if (music.current) {
            music.current.volume = 0.4;
        }
    }, []);

    const setMusic = (newMusic: string): void => {
        if (music.current) {
            music.current.src = newMusic;
        }
    };

    const repeat = (): void => {
        if (music.current) {
            if (musicState && firstInteraction) {
                music.current.play();
            }
        }
    };

    React.useEffect(() => {
        music.current?.pause();
        music.current = new Audio(linkActiveMusicTheme);
    }, [linkActiveMusicTheme]);

    React.useEffect(() => {
        if (music.current) {
            if (firstInteraction && musicState) {
                music.current.play();
            } else {
                music.current.pause();
            }

            setValueToLocalStorage('pixelpulse-music-state', musicState);
            music.current.addEventListener('ended', repeat);
            return () => music.current?.removeEventListener('ended', repeat);
        }
    }, [musicState, firstInteraction]);

    React.useEffect(() => {
        setMusic(linkActiveMusicTheme);

        if (firstInteraction && musicState && music.current) {
            music.current.play();
        }
    }, [linkActiveMusicTheme]);
}
