'use client';

import React from 'react';
import useTime from '@/hooks/useTime';
import useModal from '../../hooks/useModal';
import styles from '@/styles/components/headerTime/HeaderTime.module.scss';

export default function HeaderTime(): React.JSX.Element {
    const openCredits = useModal('credits').open;
    const [localHours, localMinutes, updateLocalTime] = useTime(new Date().getTime());
    const [serverHours, serverMinutes, updateServerTime] = useTime(new Date().getTime());

    React.useEffect(() => {
        (async () => {
            const response: Response = await fetch('/api/serverTime');
            const serverTime: string = await response.json();

            updateServerTime(serverTime);
            updateLocalTime(`${new Date().toISOString()}`);
        })();
    }, []);

    return (
        <section className={styles.time}>
            <button className={styles.time__credits} onClick={openCredits} type="button">
                Credits
            </button>
            <time dateTime={`${serverHours}:${serverMinutes}`}>
                <span className={styles.server_time_span}>server time:</span> {`${serverHours}:${serverMinutes}`}
            </time>

            <time dateTime={`${localHours}:${localMinutes}`}>
                <span className={styles.local_time_span}>local time:</span> {`${localHours}:${localMinutes}`}
            </time>
        </section>
    );
}
