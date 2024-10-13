import React from 'react';
import getZero from '@/helpers/getZero';

type UseTime = [string, string, (newTime: string) => void];

export default function useTime(dataDate: string | number): UseTime {
    const [time, setTime] = React.useState<Date>(new Date(dataDate));
    const updateTime = (newTime: string) => {
        setTime(new Date(newTime));
    };

    React.useEffect(() => {
        const timer = setInterval(() => setTime((prevTime) => new Date(prevTime.getTime() + 1000)), 1000);

        return () => clearInterval(timer);
    }, []);

    return [getZero(time.getHours()), getZero(time.getMinutes()), updateTime];
}
