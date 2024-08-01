import React from 'react';

interface UseAudioPlayer {
    isPlaying: boolean;
    play: () => Promise<void>;
    pause: () => void;
    selectTrack: (src: string) => void;
}

const useAudioPlayer = (initStatus: boolean): UseAudioPlayer => {
    const [isPlaying, setIsPlaying] = React.useState<boolean>(initStatus);
    const [audioSrc, setAudioSrc] = React.useState('');
    const audioRef = React.useRef(new Audio());

    React.useEffect(() => {
        const audio: HTMLAudioElement = audioRef.current;
        audio.volume = 0.4;

        const handlePlay = (): void => setIsPlaying(true);
        const handlePause = (): void => setIsPlaying(false);
        const handleEnded = (): void => {
            setIsPlaying(false);
            audio.play();
        };

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    React.useEffect(() => {
        if (audioSrc) {
            audioRef.current.src = audioSrc;

            if (isPlaying) {
                audioRef.current.play().catch((error) => {
                    console.error('Failed to play audio:', error);
                });
            }
        }
    }, [audioSrc]);

    React.useEffect(() => {
        if (isPlaying && audioRef.current.src) {
            audioRef.current.play().catch((error) => console.error('Failed to play audio:', error));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const play = (): Promise<void> =>
        audioRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch((error) => {
                console.error('Failed to play audio:', error);
                setIsPlaying(false);
            });

    const pause = (): void => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const selectTrack = (src: string): void => {
        setAudioSrc(src);
    };

    React.useEffect(() => {
        if (initStatus) {
            const handleUserInteraction = () => {
                play().catch((error) => {
                    console.error('Failed to play audio on user interaction:', error);
                });
                document.removeEventListener('click', handleUserInteraction);
                document.removeEventListener('keydown', handleUserInteraction);
            };

            document.addEventListener('click', handleUserInteraction);
            document.addEventListener('keydown', handleUserInteraction);

            return () => {
                document.removeEventListener('click', handleUserInteraction);
                document.removeEventListener('keydown', handleUserInteraction);
            };
        }
    }, [initStatus]);

    return {
        isPlaying,
        play,
        pause,
        selectTrack,
    };
};

export { useAudioPlayer, UseAudioPlayer };
