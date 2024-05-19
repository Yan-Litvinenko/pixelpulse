import React from 'react';
import { IAppContext } from '../../interfaces/interface';
import { ContextApp } from '../app/App';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import handleOpenModal from '../../utils/handleOpenModal';
import scroll from '../../classes/Scroll';
import styles from './MobileBoxButton.module.scss';

const MobileBoxButton = (): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);

    const handleNavigationClick = (): void => {
        if (contextApp) {
            contextApp?.handleSoundModal();
            handleOpenModal(contextApp?.setNavigationMobile);
        }
    };
    const handleAboutClick = (): void => {
        contextApp?.setNavigationMobile(false);
        contextApp?.handleSoundClick();
        scroll.on();
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
            <Link to={'about'} className={styles.box__about} onClick={handleAboutClick}>
                about
            </Link>
        </div>
    );
};

export default MobileBoxButton;
