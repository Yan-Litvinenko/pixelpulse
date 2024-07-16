import React from 'react';

interface UseStatusDate<T> {
    load: boolean;
    error: boolean;
    successMessage: T;
}

type Message<T> = 'connection error' | 'loading' | T;

const useStatusData = <T>(dependences: UseStatusDate<T>) => {
    const { error, load, successMessage } = dependences;
    const [message, setMessage] = React.useState<Message<T>>(successMessage);

    React.useEffect(() => {
        if (!error && !load) {
            setMessage(successMessage);
        } else if (error && !load) {
            setMessage('connection error');
        } else if (load && !error) {
            setMessage('loading');
        }
    }, [load, error]);

    return { message };
};

export default useStatusData;
