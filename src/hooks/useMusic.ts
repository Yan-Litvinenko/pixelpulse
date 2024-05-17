import React from 'react';

const useMusic = (audio: string) => {
    const [music] = React.useState<HTMLAudioElement>(new Audio(audio));

    music.volume = 0.5;

    const changeStateMusic = (state: boolean): void => {
        if (state) {
            music
                .play()
                .then(() => {})
                .catch(() => {});
        } else {
            music.pause();
        }
    };

    const repeat = (): void => {
        music.currentTime = 0;
        music.play();
    };

    React.useEffect(() => {
        music.addEventListener('ended', repeat);

        return () => {
            music.removeEventListener('ended', repeat);
        };
    }, []);

    return [changeStateMusic];
};

export default useMusic;
