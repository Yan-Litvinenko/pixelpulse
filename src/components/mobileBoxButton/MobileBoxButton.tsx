import React from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import { Link } from 'react-router-dom';
import { scroll } from '../../classes/Scroll';
import styles from './MobileBoxButton.module.scss';

const MobileBoxButton = (): React.JSX.Element => {
    const { navigationMobile } = useAppContext();

    const aboutClick = (): void => {
        navigationMobile.closeModal();
        scroll.on();
    };

    return (
        <div className={styles.box}>
            <button className={styles.box__navigation} onClick={navigationMobile.openModal} type="button">
                navigation
            </button>
            <Link to={'about'} className={styles.box__about} onClick={aboutClick}>
                about
            </Link>
        </div>
    );
};

export { MobileBoxButton };
