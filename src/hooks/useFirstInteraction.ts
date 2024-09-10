import React from 'react';

const useFirstInteraction = (): boolean => {
    const [firstInteraction, setFirstInteraction] =
        React.useState<boolean>(false);
    const handlerFirstinteraction = (): void => {
        setFirstInteraction(true);
        window.removeEventListener('click', handlerFirstinteraction);
        window.removeEventListener('keydown', handlerFirstinteraction);
    };

    React.useEffect(() => {
        window.addEventListener('click', handlerFirstinteraction);
        window.addEventListener('keydown', handlerFirstinteraction);

        return () => {
            window.removeEventListener('click', handlerFirstinteraction);
            window.removeEventListener('keydown', handlerFirstinteraction);
        };
    }, []);

    return firstInteraction;
};

export { useFirstInteraction };
