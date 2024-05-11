import React from 'react';

const useMusic = (audio: string) => {
    const [music] = React.useState<HTMLAudioElement>(new Audio(audio));

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

    return [changeStateMusic];
};

export default useMusic;
