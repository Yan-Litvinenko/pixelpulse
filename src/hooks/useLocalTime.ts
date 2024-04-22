import { useState, useEffect } from 'react';

const useLocalTime = (): [Date] => {
    const [value, setValue] = useState(new Date());
    const tick = (): void => setValue(new Date());

    useEffect(() => {
        const timer: NodeJS.Timeout = setInterval(() => tick(), 1000);
        return () => clearInterval(timer);
    }, []);

    return [value];
};

export default useLocalTime;
