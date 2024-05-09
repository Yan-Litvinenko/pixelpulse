import React from 'react';
import { IAppContext } from '../../interfaces/interface';
import { ContextApp } from '../app/App';
import Button from '../button/Button';
import handleOpenModal from '../../utils/handleOpenModal';
import scroll from '../../utils/scroll';
import styles from './MobileBoxButton.module.scss';

const MobileBoxButton = (): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);

    const handleNavigationClick = (): void => {
        if (contextApp) {
            handleOpenModal(contextApp?.setNavigationMobile);
        }
    };
    const handleAboutClick = (): void => {
        if (contextApp?.page !== 'about') {
            contextApp?.setPage('about');
            contextApp?.setNavigationMobile(false);
            scroll.on();
        }
    };

    return (
        <div className={styles.box}>
            <Button
                className={styles.box__navigation}
                delayEvent={false}
                handleButton={handleNavigationClick}
                textContent="navigation"
                type="button"
            />
            <Button
                className={styles.box__about}
                delayEvent={false}
                handleButton={handleAboutClick}
                textContent="about"
                type="button"
            />
        </div>
    );
};

export default MobileBoxButton;
