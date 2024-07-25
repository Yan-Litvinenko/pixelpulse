import React from 'react';
import Button from '../button/Button';
import handleOpenModal from '../../utils/handleOpenModal';
import { useTime } from '../../hooks/useTime';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './HeaderTime.module.scss';

const HeaderTime = (): React.JSX.Element => {
    const { handleSoundModal, setCredits } = useAppContext();
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
            <Button
                className={styles.time__credits}
                delayEvent={false}
                handleButton={() => {
                    handleOpenModal(setCredits);
                    handleSoundModal();
                }}
                textContent="Credits"
                type="button"
            />
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
