import React from 'react';
import fetchServerTime from '../utils/fetchServerTime';

const useServerTime = (): Date[] => {
    const [valueDate, setValueDate] = React.useState(`${new Date()}`);
    const [serverTime, setServerTime] = React.useState(new Date(valueDate));

    const tick = (): void => setServerTime(new Date(valueDate));

    React.useEffect(() => {
        fetchServerTime().then((data) => setValueDate(`${new Date(data)}`));
        const timer: NodeJS.Timeout = setInterval(() => tick(), 1000);
        return () => clearInterval(timer);
    }, []);

    return [serverTime];
};

export default useServerTime;
