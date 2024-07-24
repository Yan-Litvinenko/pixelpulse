import React from 'react';
import { getZero } from '../../utils/getZero';
import Button from '../button/Button';
import handleOpenModal from '../../utils/handleOpenModal';
import useLocalTime from '../../hooks/useLocalTime';
import styles from './HeaderTime.module.scss';
import { useAppContext } from '../../hooks/useAppContext';

const HeaderTime = (): React.JSX.Element => {
    const { handleSoundModal, setCredits } = useAppContext();
    const [localTime] = useLocalTime();
    // const serverTime = useServerTime();

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
                <span className={styles.server__time_span}>server time:</span>{' '}
                {/* {`${serverTime.getHours()}:${getZero(serverTime.getMinutes())}`} */}
            </div>

            <div className={styles.local}>
                <span className={styles.local__time_span}>local time:</span>{' '}
                {`${localTime.getHours()}:${getZero(localTime.getMinutes())}`}
            </div>
        </div>
    );
};

export { HeaderTime };
