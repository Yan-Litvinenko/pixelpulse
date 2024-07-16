import React from 'react';
import { ContextApp } from '../app/App';
import Button from '../button/Button';
import getZero from '../../utils/getZero';
import handleOpenModal from '../../utils/handleOpenModal';
import useLocalTime from '../../hooks/useLocalTime';
import useServerTime from '../../hooks/useServerTime';
import { IAppContext } from '../../interfaces/interface';
import styles from './HeaderTime.module.scss';

const HeaderTime = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { handleSoundModal, setCredits } = contextApp;
    const [localTime] = useLocalTime();
    const serverTime = useServerTime();

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
                {`${serverTime.getHours()}:${getZero(serverTime.getMinutes())}`}
            </div>

            <div className={styles.local}>
                <span className={styles.local__time_span}>local time:</span>{' '}
                {`${localTime.getHours()}:${getZero(localTime.getMinutes())}`}
            </div>
        </div>
    );
};

export default HeaderTime;
