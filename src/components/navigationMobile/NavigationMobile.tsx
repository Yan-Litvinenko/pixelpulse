import React from 'react';
import Cross from '../cross/Cross';
import Setting from '../setting/Setting';
import { HeaderStatistics } from '../headerStatistics/HeaderStatistics';
import { useAppContext } from '../../hooks/useAppContext';
import Navigation from '../navigation/Navigation';
import MobileBoxButton from '../mobileBoxButton/MobileBoxButton';
import styles from './NavigationMobile.module.scss';

const NavigationMobile = (): React.JSX.Element => {
    const { setNavigationMobile, handleSoundModal } = useAppContext();

    return (
        <div className={styles.box}>
            <div className={styles.box__inner}>
                <div className={styles.box__header}>
                    <h2 className={styles.header}>Navigation</h2>
                    <Cross
                        setModalState={() => {
                            setNavigationMobile(false);
                            handleSoundModal();
                        }}
                        scrollStatus="on"
                    />
                </div>
                <HeaderStatistics styles={styles} />
                <Navigation styles={styles} />
                <Setting className={styles} />
            </div>
            <MobileBoxButton />
        </div>
    );
};

export default NavigationMobile;
