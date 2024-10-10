'use client';

import React from 'react';
import fetchGraphQl from '@/helpers/fetchGraphql';
import useModal from '../../hooks/useModal';
import useTime from '@/hooks/useTime';
import styles from '@/styles/components/headerTime/HeaderTime.module.scss';
import { GET_SERVER_TIME } from '@/app/api/graphql/query';

export default function HeaderTime(): React.JSX.Element {
    const openCredits = useModal('credits').open;
    const [localHours, localMinutes, updateLocalTime] = useTime(new Date().getTime());
    const [serverHours, serverMinutes, updateServerTime] = useTime(new Date().getTime());

    React.useEffect(() => {
        (async () => {
            const serverTime = await fetchGraphQl<{ getServerTime: { serverTime: string } }>(GET_SERVER_TIME);
            updateServerTime(serverTime.getServerTime.serverTime);
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
