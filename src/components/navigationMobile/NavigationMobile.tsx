import React from 'react';
import { HeaderStatistics } from '../headerStatistics/HeaderStatistics';
import { useAppContext } from '../../hooks/useAppContext';
import Cross from '../cross/Cross';
import MobileBoxButton from '../mobileBoxButton/MobileBoxButton';
import Navigation from '../navigation/Navigation';
import Setting from '../setting/Setting';
import styles from './NavigationMobile.module.scss';

const NavigationMobile = (): React.JSX.Element => {
    const { navigationMobile } = useAppContext();

    return (
        <div className={styles.box}>
            <div className={styles.box__inner}>
                <div className={styles.box__header}>
                    <h2 className={styles.header}>Navigation</h2>
                    <Cross handler={navigationMobile.closeModal} />
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
