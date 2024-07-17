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

    if (!contextApp) return <></>;

    const { handleSoundModal, setNavigationMobile, handleSoundClick } = contextApp;

    const navigationClick = (): void => {
        handleSoundModal();
        handleOpenModal(setNavigationMobile);
    };

    const aboutClick = (): void => {
        setNavigationMobile(false);
        handleSoundClick();
        scroll.on();
    };

    return (
        <div className={styles.box}>
            <Button
                className={styles.box__navigation}
                delayEvent={false}
                handleButton={navigationClick}
                textContent="navigation"
                type="button"
            />
            <Link to={'about'} className={styles.box__about} onClick={aboutClick}>
                about
            </Link>
        </div>
    );
};

export default MobileBoxButton;
