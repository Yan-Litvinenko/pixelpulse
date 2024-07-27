import React from 'react';
import { useTime } from '../../hooks/useTime';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './HeaderTime.module.scss';

const HeaderTime = (): React.JSX.Element => {
    const { credits } = useAppContext();
    const [localHours, localMinutes] = useTime(new Date().getTime());
    const [serverHours, serverMinutes, updateTime] = useTime(new Date().getTime());

    React.useEffect(() => {
        (async () => {
            const response: Response = await fetch('/api/serverTime');
            const serverTime = await response.json();
            updateTime(serverTime);
        })();
    }, []);

    return (
        <div className={styles.time}>
            <button className={styles.time__credits} onClick={credits.openModal} type="button">
                Credits
            </button>
            <div className={styles.server}>
                <span className={styles.server__time_span}>server time:</span> {`${serverHours}:${serverMinutes}`}
            </div>

            <div className={styles.local}>
                <span className={styles.local__time_span}>local time:</span> {`${localHours}:${localMinutes}`}
            </div>
        </div>
    );
};

export { HeaderTime };
