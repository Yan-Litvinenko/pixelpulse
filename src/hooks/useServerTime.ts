import React from 'react';
import fetchServerTime from '../utils/fetchServerTime';

const useServerTime = (): Date => {
    const [serverTime, setServerTime] = React.useState(new Date());

    React.useEffect(() => {
        const fetchTime = async () => {
            const data = await fetchServerTime();
            setServerTime(new Date(data));
        };

        fetchTime();

        const timer = setInterval(() => {
            setServerTime((prevTime) => new Date(prevTime.getTime() + 1000));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return serverTime;
};

export default useServerTime;
