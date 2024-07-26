import React from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import Button from '../button/Button';
import { scroll } from '../../classes/Scroll';
import styles from './MobileBoxButton.module.scss';

const MobileBoxButton = (): React.JSX.Element => {
    const { setNavigationMobile, handleSoundClick } = useAppContext();
    const { openModal } = useModal('navigationMobile');

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
                handleButton={openModal}
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
